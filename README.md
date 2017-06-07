# aws-code-services
Node.js/Express/AngularJS/Jasmine project used to demonstrate working with AWS Code Services

# Description
This project is used to illustrate the application life cycle from dev to prod using AWS Code Services. The app is a message accumulator. The code is `src/` contains a `commits/` directory that contains two commits: `v1_1/` and `v1_2/`. `v1_1/` is intentionally broken and used to demonstrate the automatic rollback capabilities of AWS Code Deploy. `v1_2` adds a new feature to the app and is used to demonstrate how blue/green deployments work with AWS CodeDeploy.

# Usage
## Install
For development:
```npm install```

or for production:
```npm install --production```

## Test
```npm test```

## Build
```npm run build```

## Run
For development:
```NODE_ENV=development DEBUG=aws-code-services:* npm start```

or for production:
```NODE_ENV=production npm start```

# AWS Code Services Support
A `buildspec.yml` file is included for AWS CodeBuild and an `appspec.yml` file is included for AWS CodeDeploy.

# Infrastructure
The CloudFormation template creates a development machine for committing the commits to AWS CodeCommit. It also bootstraps two subnets, an Auto Scaling group, a load balancer, an S3 bucket, a user with minimal privileges for setting up AWS Code Services, and multiple service roles to be used along with AWS Code Services.
