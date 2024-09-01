provider "aws" {
  region = "us-east-1" # Change to your desired region
}

resource "aws_amplify_app" "block_app" {
  name       = "block_app"
  repository = "https://github.com/Tolu-Orina/BlockChainApp"

  build_spec = file("${path.root}/../amplify.yml")

  # Auto Branch
  enable_auto_branch_creation   = true
  enable_branch_auto_deletion   = true
  
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
