import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as path from 'path';

export class MyLambdaStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props) ;

      const handler = new Function(this, 'LambdaFunction', {
        runtime: Runtime.NODEJS_16_X,
        handler: 'index.handler',
        code: Code.fromAsset(path.join(__dirname, 'lambda')) //resolves to ./lambda
      });

      const api = new apigateway.RestApi(this, 'mygateway', {
        restApiName: 'myapigateway',
        description: 'All traf fic goes through this'
      });

      const items = api.root.addResource('items');

      const apilambdaintegration = new apigateway.LambdaIntegration(handler);

      items.addMethod("GET", apilambdaintegration);
    }
}