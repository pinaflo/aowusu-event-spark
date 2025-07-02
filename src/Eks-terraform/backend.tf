terraform {
  backend "s3" {
    bucket = "aowusu" # Replace with your actual S3 bucket name
    key    = "eks/terraform.tfstate"
    region = "eu-west-2"
  }
}