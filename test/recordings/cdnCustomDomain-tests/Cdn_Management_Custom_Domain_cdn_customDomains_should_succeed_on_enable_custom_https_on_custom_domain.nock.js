// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain9669/enableCustomHttps?api-version=2016-10-02')
  .reply(202, "{\r\n  \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Enabling\",\"validationData\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/6a21d728-6543-40e4-8a41-3424616cb51d/profileresults/cdnTestProfile7643/endpointresults/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomainresults/cdnTestCustomDomain9669?api-version=2016-10-02',
  'retry-after': '120',
  'x-ms-request-id': '6d70b8e7-0254-4e25-9596-af4097e3430b',
  'x-ms-client-request-id': 'dbcf3403-0ad3-40c7-b03c-4fc63a8c31f2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/6a21d728-6543-40e4-8a41-3424616cb51d?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '1fb86a96-9136-4a25-87db-9b0dfe666254',
  'x-ms-routing-request-id': 'WESTUS2:20170222T015022Z:1fb86a96-9136-4a25-87db-9b0dfe666254',
  date: 'Wed, 22 Feb 2017 01:50:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain9669/enableCustomHttps?api-version=2016-10-02')
  .reply(202, "{\r\n  \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Enabling\",\"validationData\":null\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '203',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/6a21d728-6543-40e4-8a41-3424616cb51d/profileresults/cdnTestProfile7643/endpointresults/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomainresults/cdnTestCustomDomain9669?api-version=2016-10-02',
  'retry-after': '120',
  'x-ms-request-id': '6d70b8e7-0254-4e25-9596-af4097e3430b',
  'x-ms-client-request-id': 'dbcf3403-0ad3-40c7-b03c-4fc63a8c31f2',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/6a21d728-6543-40e4-8a41-3424616cb51d?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '1fb86a96-9136-4a25-87db-9b0dfe666254',
  'x-ms-routing-request-id': 'WESTUS2:20170222T015022Z:1fb86a96-9136-4a25-87db-9b0dfe666254',
  date: 'Wed, 22 Feb 2017 01:50:22 GMT',
  connection: 'close' });
 return result; }]];