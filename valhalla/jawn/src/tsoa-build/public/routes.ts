/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SessionController } from './../../controllers/public/sessionController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../../controllers/public/userController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TraceController } from './../../controllers/public/traceloopController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { RequestController } from './../../controllers/public/requestController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PromptController } from './../../controllers/public/promptController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ExperimentDatasetController } from './../../controllers/public/experimentDatasetController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ExperimentController } from './../../controllers/public/experimentController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DataIsBeautifulRouter } from './../../controllers/public/dataIsBeautifulController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CustomerController } from './../../controllers/public/customerController';
import { expressAuthentication } from './../../authentication';
// @ts-ignore - no great way to install types from subpackage
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';

const expressAuthenticationRecasted = expressAuthentication as (req: ExRequest, securityName: string, scopes?: string[], res?: ExResponse) => Promise<any>;


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "SessionResult": {
        "dataType": "refObject",
        "properties": {
            "created_at": {"dataType":"string","required":true},
            "latest_request_created_at": {"dataType":"string","required":true},
            "session": {"dataType":"string","required":true},
            "total_cost": {"dataType":"double","required":true},
            "total_requests": {"dataType":"double","required":true},
            "prompt_tokens": {"dataType":"double","required":true},
            "completion_tokens": {"dataType":"double","required":true},
            "total_tokens": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_SessionResult-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"SessionResult"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultError_string_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"enum","enums":[null],"required":true},
            "error": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_SessionResult-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_SessionResult-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SessionQueryParams": {
        "dataType": "refObject",
        "properties": {
            "sessionIdContains": {"dataType":"string","required":true},
            "timeFilter": {"dataType":"nestedObjectLiteral","nestedProperties":{"endTimeUnixMs":{"dataType":"double","required":true},"startTimeUnixMs":{"dataType":"double","required":true}},"required":true},
            "sessionName": {"dataType":"string","required":true},
            "timezoneDifference": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SessionNameResult": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "created_at": {"dataType":"string","required":true},
            "total_cost": {"dataType":"double","required":true},
            "last_used": {"dataType":"string","required":true},
            "session_count": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_SessionNameResult-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"SessionNameResult"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_SessionNameResult-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_SessionNameResult-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SessionNameQueryParams": {
        "dataType": "refObject",
        "properties": {
            "nameContains": {"dataType":"string","required":true},
            "timezoneDifference": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserMetricsResult": {
        "dataType": "refObject",
        "properties": {
            "user_id": {"dataType":"string","required":true},
            "active_for": {"dataType":"double","required":true},
            "first_active": {"dataType":"string","required":true},
            "last_active": {"dataType":"string","required":true},
            "total_requests": {"dataType":"double","required":true},
            "average_requests_per_day_active": {"dataType":"double","required":true},
            "average_tokens_per_request": {"dataType":"double","required":true},
            "total_completion_tokens": {"dataType":"double","required":true},
            "total_prompt_tokens": {"dataType":"double","required":true},
            "cost": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_UserMetricsResult-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"UserMetricsResult"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_UserMetricsResult-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_UserMetricsResult-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_TextOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"not-equals":{"dataType":"string"},"equals":{"dataType":"string"},"like":{"dataType":"string"},"ilike":{"dataType":"string"},"contains":{"dataType":"string"},"not-contains":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_TimestampOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"gte":{"dataType":"string"},"lte":{"dataType":"string"},"lt":{"dataType":"string"},"gt":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_NumberOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"not-equals":{"dataType":"double"},"equals":{"dataType":"double"},"gte":{"dataType":"double"},"lte":{"dataType":"double"},"lt":{"dataType":"double"},"gt":{"dataType":"double"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_UserMetricsToOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"user_id":{"ref":"Partial_TextOperators_"},"last_active":{"ref":"Partial_TimestampOperators_"},"total_requests":{"ref":"Partial_NumberOperators_"},"active_for":{"ref":"Partial_NumberOperators_"},"average_requests_per_day_active":{"ref":"Partial_NumberOperators_"},"average_tokens_per_request":{"ref":"Partial_NumberOperators_"},"total_completion_tokens":{"ref":"Partial_NumberOperators_"},"total_prompt_tokens":{"ref":"Partial_NumberOperators_"},"cost":{"ref":"Partial_NumberOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_FilterLeaf.user_metrics_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"user_metrics":{"ref":"Partial_UserMetricsToOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FilterLeafSubset_user_metrics_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_FilterLeaf.user_metrics_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFilterNode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"FilterLeafSubset_user_metrics_"},{"ref":"UserFilterBranch"},{"dataType":"enum","enums":["all"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserFilterBranch": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"right":{"ref":"UserFilterNode","required":true},"operator":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":["or"]},{"dataType":"enum","enums":["and"]}],"required":true},"left":{"ref":"UserFilterNode","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserMetricsQueryParams": {
        "dataType": "refObject",
        "properties": {
            "filter": {"ref":"UserFilterNode","required":true},
            "offset": {"dataType":"double","required":true},
            "limit": {"dataType":"double","required":true},
            "timeFilter": {"dataType":"nestedObjectLiteral","nestedProperties":{"endTimeUnixSeconds":{"dataType":"double","required":true},"startTimeUnixSeconds":{"dataType":"double","required":true}}},
            "timeZoneDifferenceMinutes": {"dataType":"double"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess__count-number--prompt_tokens-number--completion_tokens-number--user_id-string--cost_usd-number_-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"cost_usd":{"dataType":"double","required":true},"user_id":{"dataType":"string","required":true},"completion_tokens":{"dataType":"double","required":true},"prompt_tokens":{"dataType":"double","required":true},"count":{"dataType":"double","required":true}}},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result__count-number--prompt_tokens-number--completion_tokens-number--user_id-string--cost_usd-number_-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess__count-number--prompt_tokens-number--completion_tokens-number--user_id-string--cost_usd-number_-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserQueryParams": {
        "dataType": "refObject",
        "properties": {
            "userIds": {"dataType":"array","array":{"dataType":"string"}},
            "timeFilter": {"dataType":"nestedObjectLiteral","nestedProperties":{"endTimeUnixSeconds":{"dataType":"double","required":true},"startTimeUnixSeconds":{"dataType":"double","required":true}}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OTELTrace": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"resourceSpans":{"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"scopeSpans":{"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"spans":{"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"droppedLinksCount":{"dataType":"double","required":true},"links":{"dataType":"array","array":{"dataType":"any"},"required":true},"status":{"dataType":"nestedObjectLiteral","nestedProperties":{"code":{"dataType":"double","required":true}},"required":true},"droppedEventsCount":{"dataType":"double","required":true},"events":{"dataType":"array","array":{"dataType":"any"},"required":true},"droppedAttributesCount":{"dataType":"double","required":true},"attributes":{"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"value":{"dataType":"nestedObjectLiteral","nestedProperties":{"intValue":{"dataType":"double"},"stringValue":{"dataType":"string"}},"required":true},"key":{"dataType":"string","required":true}}},"required":true},"endTimeUnixNano":{"dataType":"string","required":true},"startTimeUnixNano":{"dataType":"string","required":true},"kind":{"dataType":"double","required":true},"name":{"dataType":"string","required":true},"spanId":{"dataType":"string","required":true},"traceId":{"dataType":"string","required":true}}},"required":true},"scope":{"dataType":"nestedObjectLiteral","nestedProperties":{"version":{"dataType":"string","required":true},"name":{"dataType":"string","required":true}},"required":true}}},"required":true},"resource":{"dataType":"nestedObjectLiteral","nestedProperties":{"droppedAttributesCount":{"dataType":"double","required":true},"attributes":{"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"value":{"dataType":"nestedObjectLiteral","nestedProperties":{"arrayValue":{"dataType":"nestedObjectLiteral","nestedProperties":{"values":{"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"stringValue":{"dataType":"string","required":true}}},"required":true}}},"intValue":{"dataType":"double"},"stringValue":{"dataType":"string"}},"required":true},"key":{"dataType":"string","required":true}}},"required":true}},"required":true}}},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Json": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"double"},{"dataType":"boolean"},{"dataType":"enum","enums":[null]},{"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"union","subSchemas":[{"ref":"Json"},{"dataType":"undefined"}]}},{"dataType":"array","array":{"dataType":"refAlias","ref":"Json"}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Provider": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["OPENAI"]},{"dataType":"enum","enums":["ANTHROPIC"]},{"dataType":"enum","enums":["TOGETHERAI"]},{"dataType":"enum","enums":["GROQ"]},{"dataType":"enum","enums":["GOOGLE"]},{"dataType":"enum","enums":["CUSTOM"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LlmType": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["chat"]},{"dataType":"enum","enums":["completion"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FunctionCall": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string"},
            "arguments": {"dataType":"object"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Message": {
        "dataType": "refObject",
        "properties": {
            "role": {"dataType":"string"},
            "content": {"dataType":"string"},
            "function_call": {"ref":"FunctionCall"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Request": {
        "dataType": "refObject",
        "properties": {
            "llm_type": {"ref":"LlmType"},
            "model": {"dataType":"string"},
            "provider": {"dataType":"string"},
            "prompt": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "max_tokens": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}]},
            "temperature": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}]},
            "top_p": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}]},
            "n": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}]},
            "stream": {"dataType":"union","subSchemas":[{"dataType":"boolean"},{"dataType":"enum","enums":[null]}]},
            "stop": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "presence_penalty": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}]},
            "frequency_penalty": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}]},
            "logprobs": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}]},
            "best_of": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}]},
            "logit_bias": {"dataType":"union","subSchemas":[{"dataType":"object"},{"dataType":"enum","enums":[null]}]},
            "user": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "messages": {"dataType":"union","subSchemas":[{"dataType":"array","array":{"dataType":"refObject","ref":"Message"}},{"dataType":"enum","enums":[null]}]},
            "tooLarge": {"dataType":"boolean"},
            "heliconeMessage": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_number.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"string"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ErrorInfo": {
        "dataType": "refObject",
        "properties": {
            "code": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "message": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Response": {
        "dataType": "refObject",
        "properties": {
            "completions": {"dataType":"union","subSchemas":[{"ref":"Record_number.string_"},{"dataType":"enum","enums":[null]}]},
            "message": {"dataType":"union","subSchemas":[{"ref":"Message"},{"dataType":"enum","enums":[null]}]},
            "error": {"dataType":"union","subSchemas":[{"ref":"ErrorInfo"},{"dataType":"enum","enums":[null]}]},
            "model": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "tooLarge": {"dataType":"boolean"},
            "heliconeMessage": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LlmSchema": {
        "dataType": "refObject",
        "properties": {
            "request": {"ref":"Request","required":true},
            "response": {"dataType":"union","subSchemas":[{"ref":"Response"},{"dataType":"enum","enums":[null]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_string.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"string"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_string.number_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"double"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HeliconeRequest": {
        "dataType": "refObject",
        "properties": {
            "response_id": {"dataType":"string","required":true},
            "response_created_at": {"dataType":"string","required":true},
            "response_body": {"dataType":"any"},
            "response_status": {"dataType":"double","required":true},
            "response_model": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "request_id": {"dataType":"string","required":true},
            "request_model": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "model_override": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "request_created_at": {"dataType":"string","required":true},
            "request_body": {"dataType":"any","required":true},
            "request_path": {"dataType":"string","required":true},
            "request_user_id": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "request_properties": {"dataType":"union","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"Json"}},{"dataType":"enum","enums":[null]}],"required":true},
            "request_feedback": {"dataType":"union","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"Json"}},{"dataType":"enum","enums":[null]}],"required":true},
            "helicone_user": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "prompt_name": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "prompt_regex": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "key_name": {"dataType":"string","required":true},
            "delay_ms": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}],"required":true},
            "time_to_first_token": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}],"required":true},
            "total_tokens": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}],"required":true},
            "prompt_tokens": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}],"required":true},
            "completion_tokens": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}],"required":true},
            "provider": {"ref":"Provider","required":true},
            "node_id": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "prompt_id": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "feedback_created_at": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "feedback_id": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "feedback_rating": {"dataType":"union","subSchemas":[{"dataType":"boolean"},{"dataType":"enum","enums":[null]}]},
            "signed_body_url": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}]},
            "llmSchema": {"dataType":"union","subSchemas":[{"ref":"LlmSchema"},{"dataType":"enum","enums":[null]}],"required":true},
            "country_code": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "asset_ids": {"dataType":"union","subSchemas":[{"dataType":"array","array":{"dataType":"string"}},{"dataType":"enum","enums":[null]}],"required":true},
            "asset_urls": {"dataType":"union","subSchemas":[{"ref":"Record_string.string_"},{"dataType":"enum","enums":[null]}],"required":true},
            "scores": {"dataType":"union","subSchemas":[{"ref":"Record_string.number_"},{"dataType":"enum","enums":[null]}],"required":true},
            "costUSD": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"enum","enums":[null]}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_HeliconeRequest-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"HeliconeRequest"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_HeliconeRequest-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_HeliconeRequest-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_ResponseTableToOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"body_tokens":{"ref":"Partial_NumberOperators_"},"body_model":{"ref":"Partial_TextOperators_"},"body_completion":{"ref":"Partial_TextOperators_"},"status":{"ref":"Partial_NumberOperators_"},"model":{"ref":"Partial_TextOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_RequestTableToOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"prompt":{"ref":"Partial_TextOperators_"},"created_at":{"ref":"Partial_TimestampOperators_"},"user_id":{"ref":"Partial_TextOperators_"},"auth_hash":{"ref":"Partial_TextOperators_"},"org_id":{"ref":"Partial_TextOperators_"},"id":{"ref":"Partial_TextOperators_"},"node_id":{"ref":"Partial_TextOperators_"},"model":{"ref":"Partial_TextOperators_"},"modelOverride":{"ref":"Partial_TextOperators_"},"path":{"ref":"Partial_TextOperators_"},"prompt_id":{"ref":"Partial_TextOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_BooleanOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"equals":{"dataType":"boolean"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_FeedbackTableToOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"ref":"Partial_NumberOperators_"},"created_at":{"ref":"Partial_TimestampOperators_"},"rating":{"ref":"Partial_BooleanOperators_"},"response_id":{"ref":"Partial_TextOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_VectorOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"contains":{"dataType":"string"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_RequestResponseSearchToOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"request_body_vector":{"ref":"Partial_VectorOperators_"},"response_body_vector":{"ref":"Partial_VectorOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_TimestampOperatorsTyped_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"gte":{"dataType":"datetime"},"lte":{"dataType":"datetime"},"lt":{"dataType":"datetime"},"gt":{"dataType":"datetime"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_CacheHitsTableToOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"organization_id":{"ref":"Partial_TextOperators_"},"request_id":{"ref":"Partial_TextOperators_"},"latency":{"ref":"Partial_NumberOperators_"},"completion_tokens":{"ref":"Partial_NumberOperators_"},"prompt_tokens":{"ref":"Partial_NumberOperators_"},"created_at":{"ref":"Partial_TimestampOperatorsTyped_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_FilterLeaf.feedback-or-request-or-response-or-properties-or-values-or-request_response_search-or-cache_hits_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"response":{"ref":"Partial_ResponseTableToOperators_"},"request":{"ref":"Partial_RequestTableToOperators_"},"feedback":{"ref":"Partial_FeedbackTableToOperators_"},"request_response_search":{"ref":"Partial_RequestResponseSearchToOperators_"},"cache_hits":{"ref":"Partial_CacheHitsTableToOperators_"},"properties":{"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"Partial_TextOperators_"}},"values":{"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"Partial_TextOperators_"}}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FilterLeafSubset_feedback-or-request-or-response-or-properties-or-values-or-request_response_search-or-cache_hits_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_FilterLeaf.feedback-or-request-or-response-or-properties-or-values-or-request_response_search-or-cache_hits_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RequestFilterNode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"FilterLeafSubset_feedback-or-request-or-response-or-properties-or-values-or-request_response_search-or-cache_hits_"},{"ref":"RequestFilterBranch"},{"dataType":"enum","enums":["all"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RequestFilterBranch": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"right":{"ref":"RequestFilterNode","required":true},"operator":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":["or"]},{"dataType":"enum","enums":["and"]}],"required":true},"left":{"ref":"RequestFilterNode","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SortDirection": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["asc"]},{"dataType":"enum","enums":["desc"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SortLeafRequest": {
        "dataType": "refObject",
        "properties": {
            "random": {"dataType":"enum","enums":[true]},
            "created_at": {"ref":"SortDirection"},
            "cache_created_at": {"ref":"SortDirection"},
            "latency": {"ref":"SortDirection"},
            "last_active": {"ref":"SortDirection"},
            "total_tokens": {"ref":"SortDirection"},
            "completion_tokens": {"ref":"SortDirection"},
            "prompt_tokens": {"ref":"SortDirection"},
            "user_id": {"ref":"SortDirection"},
            "body_model": {"ref":"SortDirection"},
            "is_cached": {"ref":"SortDirection"},
            "request_prompt": {"ref":"SortDirection"},
            "response_text": {"ref":"SortDirection"},
            "properties": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"SortDirection"}},
            "values": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"SortDirection"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RequestQueryParams": {
        "dataType": "refObject",
        "properties": {
            "filter": {"ref":"RequestFilterNode","required":true},
            "offset": {"dataType":"double"},
            "limit": {"dataType":"double"},
            "sort": {"ref":"SortLeafRequest"},
            "isCached": {"dataType":"boolean"},
            "includeInputs": {"dataType":"boolean"},
            "isPartOfExperiment": {"dataType":"boolean"},
            "isScored": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_null_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"enum","enums":[null],"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_null.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_null_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "HeliconeRequestAsset": {
        "dataType": "refObject",
        "properties": {
            "assetUrl": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_HeliconeRequestAsset_": {
        "dataType": "refObject",
        "properties": {
            "data": {"ref":"HeliconeRequestAsset","required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_HeliconeRequestAsset.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_HeliconeRequestAsset_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_string.number-or-boolean_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"boolean"}]},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Scores": {
        "dataType": "refAlias",
        "type": {"ref":"Record_string.number-or-boolean_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ScoreRequest": {
        "dataType": "refObject",
        "properties": {
            "scores": {"ref":"Scores","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PromptsResult": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "user_defined_id": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "pretty_name": {"dataType":"string","required":true},
            "created_at": {"dataType":"string","required":true},
            "major_version": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_PromptsResult-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"PromptsResult"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_PromptsResult-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_PromptsResult-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_PromptToOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"ref":"Partial_TextOperators_"},"user_defined_id":{"ref":"Partial_TextOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_FilterLeaf.prompt_v2_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"prompt_v2":{"ref":"Partial_PromptToOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FilterLeafSubset_prompt_v2_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_FilterLeaf.prompt_v2_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PromptsFilterNode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"FilterLeafSubset_prompt_v2_"},{"ref":"PromptsFilterBranch"},{"dataType":"enum","enums":["all"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PromptsFilterBranch": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"right":{"ref":"PromptsFilterNode","required":true},"operator":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":["or"]},{"dataType":"enum","enums":["and"]}],"required":true},"left":{"ref":"PromptsFilterNode","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PromptsQueryParams": {
        "dataType": "refObject",
        "properties": {
            "filter": {"ref":"PromptsFilterNode","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PromptResult": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "user_defined_id": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "pretty_name": {"dataType":"string","required":true},
            "major_version": {"dataType":"double","required":true},
            "latest_version_id": {"dataType":"string","required":true},
            "latest_model_used": {"dataType":"string","required":true},
            "created_at": {"dataType":"string","required":true},
            "last_used": {"dataType":"string","required":true},
            "versions": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_PromptResult_": {
        "dataType": "refObject",
        "properties": {
            "data": {"ref":"PromptResult","required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_PromptResult.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_PromptResult_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PromptQueryParams": {
        "dataType": "refObject",
        "properties": {
            "timeFilter": {"dataType":"nestedObjectLiteral","nestedProperties":{"end":{"dataType":"string","required":true},"start":{"dataType":"string","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PromptVersionResult": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "minor_version": {"dataType":"double","required":true},
            "major_version": {"dataType":"double","required":true},
            "helicone_template": {"dataType":"string","required":true},
            "prompt_v2": {"dataType":"string","required":true},
            "model": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_PromptVersionResult_": {
        "dataType": "refObject",
        "properties": {
            "data": {"ref":"PromptVersionResult","required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_PromptVersionResult.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_PromptVersionResult_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PromptCreateSubversionParams": {
        "dataType": "refObject",
        "properties": {
            "newHeliconeTemplate": {"dataType":"any","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PromptInputRecord": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "inputs": {"ref":"Record_string.string_","required":true},
            "source_request": {"dataType":"string","required":true},
            "prompt_version": {"dataType":"string","required":true},
            "created_at": {"dataType":"string","required":true},
            "response_body": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_PromptInputRecord-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"PromptInputRecord"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_PromptInputRecord-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_PromptInputRecord-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_PromptVersionResult-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"PromptVersionResult"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_PromptVersionResult-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_PromptVersionResult-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess__datasetId-string__": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"nestedObjectLiteral","nestedProperties":{"datasetId":{"dataType":"string","required":true}},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result__datasetId-string_.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess__datasetId-string__"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DatasetMetadata": {
        "dataType": "refObject",
        "properties": {
            "promptId": {"dataType":"string"},
            "inputRecordsIds": {"dataType":"array","array":{"dataType":"string"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NewDatasetParams": {
        "dataType": "refObject",
        "properties": {
            "datasetName": {"dataType":"string","required":true},
            "requestIds": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "meta": {"ref":"DatasetMetadata"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_PromptVersionsToOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"minor_version":{"ref":"Partial_NumberOperators_"},"major_version":{"ref":"Partial_NumberOperators_"},"id":{"ref":"Partial_TextOperators_"},"prompt_v2":{"ref":"Partial_TextOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_FilterLeaf.request-or-prompts_versions_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"request":{"ref":"Partial_RequestTableToOperators_"},"prompts_versions":{"ref":"Partial_PromptVersionsToOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FilterLeafSubset_request-or-prompts_versions_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_FilterLeaf.request-or-prompts_versions_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DatasetFilterNode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"FilterLeafSubset_request-or-prompts_versions_"},{"ref":"DatasetFilterBranch"},{"dataType":"enum","enums":["all"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DatasetFilterBranch": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"right":{"ref":"DatasetFilterNode","required":true},"operator":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":["or"]},{"dataType":"enum","enums":["and"]}],"required":true},"left":{"ref":"DatasetFilterNode","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RandomDatasetParams": {
        "dataType": "refObject",
        "properties": {
            "datasetName": {"dataType":"string","required":true},
            "filter": {"ref":"DatasetFilterNode","required":true},
            "offset": {"dataType":"double"},
            "limit": {"dataType":"double"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DatasetResult": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "created_at": {"dataType":"string","required":true},
            "meta": {"ref":"DatasetMetadata"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_DatasetResult-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"DatasetResult"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_DatasetResult-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_DatasetResult-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess___-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{}},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result___-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess___-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess__experimentId-string__": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"nestedObjectLiteral","nestedProperties":{"experimentId":{"dataType":"string","required":true}},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result__experimentId-string_.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess__experimentId-string__"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NewExperimentParams": {
        "dataType": "refObject",
        "properties": {
            "datasetId": {"dataType":"string","required":true},
            "promptVersion": {"dataType":"string","required":true},
            "model": {"dataType":"string","required":true},
            "providerKeyId": {"dataType":"string","required":true},
            "meta": {"dataType":"any"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResponseObj": {
        "dataType": "refObject",
        "properties": {
            "body": {"dataType":"any","required":true},
            "createdAt": {"dataType":"string","required":true},
            "completionTokens": {"dataType":"double","required":true},
            "promptTokens": {"dataType":"double","required":true},
            "delayMs": {"dataType":"double","required":true},
            "model": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RequestObj": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "provider": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Score": {
        "dataType": "refObject",
        "properties": {
            "valueType": {"dataType":"string","required":true},
            "value": {"dataType":"union","subSchemas":[{"dataType":"double"},{"dataType":"datetime"},{"dataType":"string"}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Record_string.Score_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"additionalProperties":{"ref":"Score"},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExperimentScores": {
        "dataType": "refObject",
        "properties": {
            "dataset": {"dataType":"nestedObjectLiteral","nestedProperties":{"scores":{"ref":"Record_string.Score_","required":true}},"required":true},
            "hypothesis": {"dataType":"nestedObjectLiteral","nestedProperties":{"scores":{"ref":"Record_string.Score_","required":true}},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Experiment": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "organization": {"dataType":"string","required":true},
            "dataset": {"dataType":"nestedObjectLiteral","nestedProperties":{"rows":{"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"scores":{"ref":"Record_string.Score_","required":true},"inputRecord":{"dataType":"nestedObjectLiteral","nestedProperties":{"request":{"ref":"RequestObj","required":true},"response":{"ref":"ResponseObj","required":true},"inputs":{"ref":"Record_string.string_","required":true},"requestPath":{"dataType":"string","required":true},"requestId":{"dataType":"string","required":true}}},"rowId":{"dataType":"string","required":true}}},"required":true},"name":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}},"required":true},
            "meta": {"dataType":"any","required":true},
            "createdAt": {"dataType":"string","required":true},
            "hypotheses": {"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"runs":{"dataType":"array","array":{"dataType":"nestedObjectLiteral","nestedProperties":{"request":{"ref":"RequestObj"},"scores":{"ref":"Record_string.Score_","required":true},"response":{"ref":"ResponseObj"},"resultRequestId":{"dataType":"string","required":true},"datasetRowId":{"dataType":"string","required":true}}},"required":true},"providerKey":{"dataType":"string","required":true},"createdAt":{"dataType":"string","required":true},"status":{"dataType":"string","required":true},"model":{"dataType":"string","required":true},"parentPromptVersion":{"dataType":"nestedObjectLiteral","nestedProperties":{"template":{"dataType":"any","required":true}}},"promptVersion":{"dataType":"nestedObjectLiteral","nestedProperties":{"template":{"dataType":"any","required":true}}},"promptVersionId":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}}},"required":true},
            "scores": {"dataType":"union","subSchemas":[{"ref":"ExperimentScores"},{"dataType":"enum","enums":[null]}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_Experiment-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"Experiment"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_Experiment-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_Experiment-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_ExperimentToOperators_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"ref":"Partial_TextOperators_"},"prompt_v2":{"ref":"Partial_TextOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_FilterLeaf.experiment_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"experiment":{"ref":"Partial_ExperimentToOperators_"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FilterLeafSubset_experiment_": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_FilterLeaf.experiment_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExperimentFilterNode": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"FilterLeafSubset_experiment_"},{"ref":"ExperimentFilterBranch"},{"dataType":"enum","enums":["all"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ExperimentFilterBranch": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"right":{"ref":"ExperimentFilterNode","required":true},"operator":{"dataType":"union","subSchemas":[{"dataType":"enum","enums":["or"]},{"dataType":"enum","enums":["and"]}],"required":true},"left":{"ref":"ExperimentFilterNode","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IncludeExperimentKeys": {
        "dataType": "refObject",
        "properties": {
            "inputs": {"dataType":"enum","enums":[true]},
            "promptVersion": {"dataType":"enum","enums":[true]},
            "responseBodies": {"dataType":"enum","enums":[true]},
            "score": {"dataType":"enum","enums":[true]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TotalValuesForAllOfTime": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"total_cost":{"dataType":"double","required":true},"total_tokens":{"dataType":"double","required":true},"total_requests":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_TotalValuesForAllOfTime_": {
        "dataType": "refObject",
        "properties": {
            "data": {"ref":"TotalValuesForAllOfTime","required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_TotalValuesForAllOfTime.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_TotalValuesForAllOfTime_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ModelUsageOverTime": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"tokens":{"dataType":"double","required":true},"date":{"dataType":"string","required":true},"model":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_ModelUsageOverTime-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refAlias","ref":"ModelUsageOverTime"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_ModelUsageOverTime-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_ModelUsageOverTime-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProviderUsageOverTime": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"tokens":{"dataType":"double","required":true},"date":{"dataType":"string","required":true},"provider":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_ProviderUsageOverTime-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refAlias","ref":"ProviderUsageOverTime"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_ProviderUsageOverTime-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_ProviderUsageOverTime-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_number_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"double","required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_number.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_number_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TimeSpan": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["7d"]},{"dataType":"enum","enums":["1m"]},{"dataType":"enum","enums":["3m"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ModelName": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["gpt-3.5"]},{"dataType":"enum","enums":["gpt-4o"]},{"dataType":"enum","enums":["gpt-4o-mini"]},{"dataType":"enum","enums":["gpt-4"]},{"dataType":"enum","enums":["gpt-4-turbo"]},{"dataType":"enum","enums":["claude-3-opus"]},{"dataType":"enum","enums":["claude-3-sonnet"]},{"dataType":"enum","enums":["claude-3-haiku"]},{"dataType":"enum","enums":["claude-2"]},{"dataType":"enum","enums":["open-mixtral"]},{"dataType":"enum","enums":["Llama"]},{"dataType":"enum","enums":["dall-e"]},{"dataType":"enum","enums":["text-moderation"]},{"dataType":"enum","enums":["text-embedding"]},{"dataType":"enum","enums":["anthropic/claude-3.5-sonnet"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProviderName": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["OPENAI"]},{"dataType":"enum","enums":["ANTHROPIC"]},{"dataType":"enum","enums":["MISTRAL"]},{"dataType":"enum","enums":["META"]},{"dataType":"enum","enums":["OPENROUTER"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "DataIsBeautifulRequestBody": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"provider":{"ref":"ProviderName"},"models":{"dataType":"array","array":{"dataType":"refAlias","ref":"ModelName"}},"timespan":{"ref":"TimeSpan","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TTFTvsPromptLength": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"prompt_length":{"dataType":"double","required":true},"ttft_normalized_p75":{"dataType":"double","required":true},"ttft_normalized_p99":{"dataType":"double","required":true},"ttft_normalized":{"dataType":"double","required":true},"ttft_p75":{"dataType":"double","required":true},"ttft_p99":{"dataType":"double","required":true},"ttft":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_TTFTvsPromptLength-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refAlias","ref":"TTFTvsPromptLength"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_TTFTvsPromptLength-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_TTFTvsPromptLength-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ModelBreakdown": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"percent":{"dataType":"double","required":true},"matched_model":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_ModelBreakdown-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refAlias","ref":"ModelBreakdown"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_ModelBreakdown-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_ModelBreakdown-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ModelCost": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"percent":{"dataType":"double","required":true},"matched_model":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_ModelCost-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refAlias","ref":"ModelCost"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_ModelCost-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_ModelCost-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ProviderBreakdown": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"percent":{"dataType":"double","required":true},"provider":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_ProviderBreakdown-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refAlias","ref":"ProviderBreakdown"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_ProviderBreakdown-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_ProviderBreakdown-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ModelBreakdownOverTime": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{"date":{"dataType":"string","required":true}}},{"ref":"ModelBreakdown"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ResultSuccess_ModelBreakdownOverTime-Array_": {
        "dataType": "refObject",
        "properties": {
            "data": {"dataType":"array","array":{"dataType":"refAlias","ref":"ModelBreakdownOverTime"},"required":true},
            "error": {"dataType":"enum","enums":[null],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Result_ModelBreakdownOverTime-Array.string_": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"ref":"ResultSuccess_ModelBreakdownOverTime-Array_"},{"ref":"ResultError_string_"}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CustomerUsage": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "cost": {"dataType":"double","required":true},
            "count": {"dataType":"double","required":true},
            "prompt_tokens": {"dataType":"double","required":true},
            "completion_tokens": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Customer": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.post('/v1/session/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(SessionController)),
            ...(fetchMiddlewares<RequestHandler>(SessionController.prototype.getSessions)),

            async function SessionController_getSessions(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"SessionQueryParams"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SessionController();

              await templateService.apiHandler({
                methodName: 'getSessions',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/session/name/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(SessionController)),
            ...(fetchMiddlewares<RequestHandler>(SessionController.prototype.getNames)),

            async function SessionController_getNames(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"SessionNameQueryParams"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SessionController();

              await templateService.apiHandler({
                methodName: 'getNames',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/user/metrics/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getUserMetrics)),

            async function UserController_getUserMetrics(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UserMetricsQueryParams"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'getUserMetrics',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/user/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getUsers)),

            async function UserController_getUsers(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UserQueryParams"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'getUsers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/trace/log',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(TraceController)),
            ...(fetchMiddlewares<RequestHandler>(TraceController.prototype.logTrace)),

            async function TraceController_logTrace(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    traceBody: {"in":"body","name":"traceBody","required":true,"ref":"OTELTrace"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new TraceController();

              await templateService.apiHandler({
                methodName: 'logTrace',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/request/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(RequestController)),
            ...(fetchMiddlewares<RequestHandler>(RequestController.prototype.getRequests)),

            async function RequestController_getRequests(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"RequestQueryParams"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new RequestController();

              await templateService.apiHandler({
                methodName: 'getRequests',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/request/:requestId/feedback',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(RequestController)),
            ...(fetchMiddlewares<RequestHandler>(RequestController.prototype.feedbackRequest)),

            async function RequestController_feedbackRequest(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"rating":{"dataType":"boolean","required":true}}},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    requestId: {"in":"path","name":"requestId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new RequestController();

              await templateService.apiHandler({
                methodName: 'feedbackRequest',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/v1/request/:requestId/property',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(RequestController)),
            ...(fetchMiddlewares<RequestHandler>(RequestController.prototype.putProperty)),

            async function RequestController_putProperty(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"value":{"dataType":"string","required":true},"key":{"dataType":"string","required":true}}},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    requestId: {"in":"path","name":"requestId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new RequestController();

              await templateService.apiHandler({
                methodName: 'putProperty',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/request/:requestId/assets/:assetId',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(RequestController)),
            ...(fetchMiddlewares<RequestHandler>(RequestController.prototype.getRequestAssetById)),

            async function RequestController_getRequestAssetById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    requestId: {"in":"path","name":"requestId","required":true,"dataType":"string"},
                    assetId: {"in":"path","name":"assetId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new RequestController();

              await templateService.apiHandler({
                methodName: 'getRequestAssetById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/request/:requestId/score',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(RequestController)),
            ...(fetchMiddlewares<RequestHandler>(RequestController.prototype.addScores)),

            async function RequestController_addScores(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"ScoreRequest"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    requestId: {"in":"path","name":"requestId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new RequestController();

              await templateService.apiHandler({
                methodName: 'addScores',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/prompt/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(PromptController)),
            ...(fetchMiddlewares<RequestHandler>(PromptController.prototype.getPrompts)),

            async function PromptController_getPrompts(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"PromptsQueryParams"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PromptController();

              await templateService.apiHandler({
                methodName: 'getPrompts',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/prompt/:promptId/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(PromptController)),
            ...(fetchMiddlewares<RequestHandler>(PromptController.prototype.getPrompt)),

            async function PromptController_getPrompt(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"PromptQueryParams"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    promptId: {"in":"path","name":"promptId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PromptController();

              await templateService.apiHandler({
                methodName: 'getPrompt',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/v1/prompt/:promptId',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(PromptController)),
            ...(fetchMiddlewares<RequestHandler>(PromptController.prototype.deletePrompt)),

            async function PromptController_deletePrompt(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    promptId: {"in":"path","name":"promptId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PromptController();

              await templateService.apiHandler({
                methodName: 'deletePrompt',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/prompt/version/:promptVersionId/subversion',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(PromptController)),
            ...(fetchMiddlewares<RequestHandler>(PromptController.prototype.createSubversion)),

            async function PromptController_createSubversion(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"PromptCreateSubversionParams"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    promptVersionId: {"in":"path","name":"promptVersionId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PromptController();

              await templateService.apiHandler({
                methodName: 'createSubversion',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/prompt/version/:promptVersionId/inputs/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(PromptController)),
            ...(fetchMiddlewares<RequestHandler>(PromptController.prototype.getInputs)),

            async function PromptController_getInputs(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"random":{"dataType":"boolean"},"limit":{"dataType":"double","required":true}}},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    promptVersionId: {"in":"path","name":"promptVersionId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PromptController();

              await templateService.apiHandler({
                methodName: 'getInputs',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/prompt/:promptId/versions/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(PromptController)),
            ...(fetchMiddlewares<RequestHandler>(PromptController.prototype.getPromptVersions)),

            async function PromptController_getPromptVersions(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{}},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    promptId: {"in":"path","name":"promptId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new PromptController();

              await templateService.apiHandler({
                methodName: 'getPromptVersions',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/experiment/dataset',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(ExperimentDatasetController)),
            ...(fetchMiddlewares<RequestHandler>(ExperimentDatasetController.prototype.addDataset)),

            async function ExperimentDatasetController_addDataset(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"NewDatasetParams"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExperimentDatasetController();

              await templateService.apiHandler({
                methodName: 'addDataset',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/experiment/dataset/random',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(ExperimentDatasetController)),
            ...(fetchMiddlewares<RequestHandler>(ExperimentDatasetController.prototype.addRandomDataset)),

            async function ExperimentDatasetController_addRandomDataset(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"RandomDatasetParams"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExperimentDatasetController();

              await templateService.apiHandler({
                methodName: 'addRandomDataset',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/experiment/dataset/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(ExperimentDatasetController)),
            ...(fetchMiddlewares<RequestHandler>(ExperimentDatasetController.prototype.getDatasets)),

            async function ExperimentDatasetController_getDatasets(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"promptId":{"dataType":"string"}}},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExperimentDatasetController();

              await templateService.apiHandler({
                methodName: 'getDatasets',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/experiment/dataset/:datasetId/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(ExperimentDatasetController)),
            ...(fetchMiddlewares<RequestHandler>(ExperimentDatasetController.prototype.getDataset)),

            async function ExperimentDatasetController_getDataset(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{}},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExperimentDatasetController();

              await templateService.apiHandler({
                methodName: 'getDataset',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/experiment/dataset/:datasetId/mutate',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(ExperimentDatasetController)),
            ...(fetchMiddlewares<RequestHandler>(ExperimentDatasetController.prototype.mutateDataset)),

            async function ExperimentDatasetController_mutateDataset(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"removeRequests":{"dataType":"array","array":{"dataType":"string"},"required":true},"addRequests":{"dataType":"array","array":{"dataType":"string"},"required":true}}},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExperimentDatasetController();

              await templateService.apiHandler({
                methodName: 'mutateDataset',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/experiment',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(ExperimentController)),
            ...(fetchMiddlewares<RequestHandler>(ExperimentController.prototype.createNewExperiment)),

            async function ExperimentController_createNewExperiment(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"NewExperimentParams"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExperimentController();

              await templateService.apiHandler({
                methodName: 'createNewExperiment',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/experiment/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(ExperimentController)),
            ...(fetchMiddlewares<RequestHandler>(ExperimentController.prototype.getExperiments)),

            async function ExperimentController_getExperiments(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"include":{"ref":"IncludeExperimentKeys"},"filter":{"ref":"ExperimentFilterNode","required":true}}},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new ExperimentController();

              await templateService.apiHandler({
                methodName: 'getExperiments',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/public/dataisbeautiful/total-values',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter)),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter.prototype.getTotalValues)),

            async function DataIsBeautifulRouter_getTotalValues(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DataIsBeautifulRouter();

              await templateService.apiHandler({
                methodName: 'getTotalValues',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/public/dataisbeautiful/model/usage/overtime',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter)),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter.prototype.getModelUsageOverTime)),

            async function DataIsBeautifulRouter_getModelUsageOverTime(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DataIsBeautifulRouter();

              await templateService.apiHandler({
                methodName: 'getModelUsageOverTime',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/public/dataisbeautiful/provider/usage/overtime',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter)),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter.prototype.getProviderUsageOverTime)),

            async function DataIsBeautifulRouter_getProviderUsageOverTime(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DataIsBeautifulRouter();

              await templateService.apiHandler({
                methodName: 'getProviderUsageOverTime',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/public/dataisbeautiful/total-requests',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter)),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter.prototype.getTotalRequests)),

            async function DataIsBeautifulRouter_getTotalRequests(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"DataIsBeautifulRequestBody"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DataIsBeautifulRouter();

              await templateService.apiHandler({
                methodName: 'getTotalRequests',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/public/dataisbeautiful/ttft-vs-prompt-length',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter)),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter.prototype.getTTFTvsPromptInputLength)),

            async function DataIsBeautifulRouter_getTTFTvsPromptInputLength(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"DataIsBeautifulRequestBody"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DataIsBeautifulRouter();

              await templateService.apiHandler({
                methodName: 'getTTFTvsPromptInputLength',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/public/dataisbeautiful/model/percentage',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter)),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter.prototype.getModelPercentage)),

            async function DataIsBeautifulRouter_getModelPercentage(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"DataIsBeautifulRequestBody"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DataIsBeautifulRouter();

              await templateService.apiHandler({
                methodName: 'getModelPercentage',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/public/dataisbeautiful/model/cost',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter)),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter.prototype.getModelCost)),

            async function DataIsBeautifulRouter_getModelCost(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"DataIsBeautifulRequestBody"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DataIsBeautifulRouter();

              await templateService.apiHandler({
                methodName: 'getModelCost',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/public/dataisbeautiful/provider/percentage',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter)),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter.prototype.getProviderPercentage)),

            async function DataIsBeautifulRouter_getProviderPercentage(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"DataIsBeautifulRequestBody"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DataIsBeautifulRouter();

              await templateService.apiHandler({
                methodName: 'getProviderPercentage',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/public/dataisbeautiful/model/percentage/overtime',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter)),
            ...(fetchMiddlewares<RequestHandler>(DataIsBeautifulRouter.prototype.getModelPercentageOverTime)),

            async function DataIsBeautifulRouter_getModelPercentageOverTime(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"DataIsBeautifulRequestBody"},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new DataIsBeautifulRouter();

              await templateService.apiHandler({
                methodName: 'getModelPercentageOverTime',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/customer/:customerId/usage/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomerController)),
            ...(fetchMiddlewares<RequestHandler>(CustomerController.prototype.getCustomerUsage)),

            async function CustomerController_getCustomerUsage(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{}},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
                    customerId: {"in":"path","name":"customerId","required":true,"dataType":"string"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CustomerController();

              await templateService.apiHandler({
                methodName: 'getCustomerUsage',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/v1/customer/query',
            authenticateMiddleware([{"api_key":[]}]),
            ...(fetchMiddlewares<RequestHandler>(CustomerController)),
            ...(fetchMiddlewares<RequestHandler>(CustomerController.prototype.getCustomers)),

            async function CustomerController_getCustomers(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{}},
                    request: {"in":"request","name":"request","required":true,"dataType":"object"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new CustomerController();

              await templateService.apiHandler({
                methodName: 'getCustomers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
        return async function runAuthenticationMiddleware(request: any, response: any, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts: any[] = [];
            const pushAndRethrow = (error: any) => {
                failedAttempts.push(error);
                throw error;
            };

            const secMethodOrPromises: Promise<any>[] = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises: Promise<any>[] = [];

                    for (const name in secMethod) {
                        secMethodAndPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow)
                        );
                    }

                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                } else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow)
                        );
                    }
                }
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            try {
                request['user'] = await Promise.any(secMethodOrPromises);

                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }

                next();
            }
            catch(err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;

                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next(error);
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
