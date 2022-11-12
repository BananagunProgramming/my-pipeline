import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, InlineCode, Runtime } from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class MyLambdaStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props) ;

      new Function(this, 'LambdaFunction', {
        runtime: Runtime.NODEJS_16_X,
        handler: 'index.handler',
        //code: new InlineCode('exports.handler = _ => "Hello, CDK";')
        code: Code.fromAsset(path.join(__dirname, 'lambda')) //resolves to ./lambda
      });
    }
}