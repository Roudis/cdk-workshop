import { Duration, Stack, StackProps } from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda"

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const hello = new Function(this, "HelloHandler", {
      runtime: Runtime.NODEJS_22_X,
      code: Code.fromAsset("lambda"),
      handler: "hello.handler"
    })
  }
}
