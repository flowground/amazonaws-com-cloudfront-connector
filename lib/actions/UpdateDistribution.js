/**
 * Auto-generated action file for "Amazon CloudFront" API.
 *
 * Generated at: 2019-07-08T11:12:30.589Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / amazonaws-com-cloudfront-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'UpdateDistribution'
 * Endpoint Path: '/2018-11-05/distribution/{Id}/config#UpdateDistribution'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "Id",
    "Version",
    "X-Amz-Content-Sha256",
    "X-Amz-Date",
    "X-Amz-Algorithm",
    "X-Amz-Credential",
    "X-Amz-Security-Token",
    "X-Amz-Signature",
    "X-Amz-SignedHeaders"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "Id": "Id",
    "Version": "Version",
    "X_Amz_Content_Sha256": "X-Amz-Content-Sha256",
    "X_Amz_Date": "X-Amz-Date",
    "X_Amz_Algorithm": "X-Amz-Algorithm",
    "X_Amz_Credential": "X-Amz-Credential",
    "X_Amz_Security_Token": "X-Amz-Security-Token",
    "X_Amz_Signature": "X-Amz-Signature",
    "X_Amz_SignedHeaders": "X-Amz-SignedHeaders",
    "Items": "Items",
    "Quantity": "Quantity",
    "Aliases": "Aliases",
    "CacheBehaviors": "CacheBehaviors",
    "CallerReference": "CallerReference",
    "Comment": "Comment",
    "CustomErrorResponses": "CustomErrorResponses",
    "CachedMethods": "CachedMethods",
    "AllowedMethods": "AllowedMethods",
    "Compress": "Compress",
    "DefaultTTL": "DefaultTTL",
    "FieldLevelEncryptionId": "FieldLevelEncryptionId",
    "Forward": "Forward",
    "WhitelistedNames": "WhitelistedNames",
    "Cookies": "Cookies",
    "Headers": "Headers",
    "QueryString": "QueryString",
    "QueryStringCacheKeys": "QueryStringCacheKeys",
    "ForwardedValues": "ForwardedValues",
    "LambdaFunctionAssociations": "LambdaFunctionAssociations",
    "MaxTTL": "MaxTTL",
    "MinTTL": "MinTTL",
    "SmoothStreaming": "SmoothStreaming",
    "TargetOriginId": "TargetOriginId",
    "Enabled": "Enabled",
    "TrustedSigners": "TrustedSigners",
    "ViewerProtocolPolicy": "ViewerProtocolPolicy",
    "DefaultCacheBehavior": "DefaultCacheBehavior",
    "DefaultRootObject": "DefaultRootObject",
    "HttpVersion": "HttpVersion",
    "IsIPV6Enabled": "IsIPV6Enabled",
    "Bucket": "Bucket",
    "IncludeCookies": "IncludeCookies",
    "Prefix": "Prefix",
    "Logging": "Logging",
    "OriginGroups": "OriginGroups",
    "Origins": "Origins",
    "PriceClass": "PriceClass",
    "RestrictionType": "RestrictionType",
    "GeoRestriction": "GeoRestriction",
    "Restrictions": "Restrictions",
    "ACMCertificateArn": "ACMCertificateArn",
    "Certificate": "Certificate",
    "CertificateSource": "CertificateSource",
    "CloudFrontDefaultCertificate": "CloudFrontDefaultCertificate",
    "IAMCertificateId": "IAMCertificateId",
    "MinimumProtocolVersion": "MinimumProtocolVersion",
    "SSLSupportMethod": "SSLSupportMethod",
    "ViewerCertificate": "ViewerCertificate",
    "WebACLId": "WebACLId",
    "DistributionConfig": "DistributionConfig",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'text/xml';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['hmac'] = cfg['auth_hmac'];

    let callParams = {
        spec: spec,
        operationId: 'UpdateDistribution',
        pathName: '/2018-11-05/distribution/{Id}/config#UpdateDistribution',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}