provider "aws" {
  region = "us-east-1" # Change to your desired region
}

# AMPLIFY SERVICE ROLE
resource "aws_iam_role" "amplify_role" {
    name = "amplify_service_role"
    assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "amplify.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_policy" "cloudwatch_logs_policy" {
  name        = "CloudWatchLogsPolicy"
  description = "Policy for managing CloudWatch Logs resources"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect   = "Allow",
        Action   = [
          "logs:CreateLogStream",
          "logs:CreateLogGroup",
          "logs:DescribeLogGroups",
          "logs:PutLogEvents"
        ],
        Resource = "*"
      }
    ]
  })
}


resource "aws_iam_role_policy_attachment" "amplify_codecommit_attachment" {
  role       = aws_iam_role.amplify_role.name
  policy_arn = "arn:aws:iam::aws:policy/AWSCodeCommitFullAccess"
}


resource "aws_iam_role_policy_attachment" "cloudwatch_logs_policy_attachment" {
  role       = aws_iam_role.amplify_role.name
  policy_arn = aws_iam_policy.cloudwatch_logs_policy.arn
}

resource "aws_amplify_app" "block_app" {
  name       = "block_app"
  repository = "https://github.com/Tolu-Orina/BlockChainApp"

  build_spec = file("${path.root}/../amplify.yml")

  # Auto Branch
  enable_auto_branch_creation   = true
  enable_branch_auto_deletion   = true
  
  # GitHub personal access token
  # access_token = "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"

  iam_service_role_arn =  aws_iam_role.amplify_role.arn

  platform = "WEB_COMPUTE" # Important for Next.js application
  
  environment_variables = {
    NEXT_PUBLIC_USER_POOL_ID="us-east-1_eH3KhD7Is"
    NEXT_PUBLIC_USER_POOL_CLIENT_ID="7n0seqfh9e2e97mrp14b4dcknm"
    NEXT_PUBLIC_REGION="us-east-1"
  }
}

resource "aws_amplify_branch" "main_prod" {
  app_id      = aws_amplify_app.block_app.id
  branch_name = "main"
  
  enable_auto_build = true

  framework = "Next.js - SSR"
  stage     = "PRODUCTION"

}
