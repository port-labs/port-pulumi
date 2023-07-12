// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ActionApprovalEmailNotification {
}

export interface ActionApprovalWebhookNotification {
    url: string;
}

export interface ActionAzureMethod {
    org: string;
    webhook: string;
}

export interface ActionGithubMethod {
    omitPayload?: boolean;
    omitUserInputs?: boolean;
    org: string;
    repo: string;
    reportWorkflowStatus?: boolean;
    workflow: string;
}

export interface ActionKafkaMethod {
}

export interface ActionUserProperties {
    arrayProps?: {[key: string]: outputs.ActionUserPropertiesArrayProps};
    booleanProps?: {[key: string]: outputs.ActionUserPropertiesBooleanProps};
    numberProps?: {[key: string]: outputs.ActionUserPropertiesNumberProps};
    objectProps?: {[key: string]: outputs.ActionUserPropertiesObjectProps};
    stringProps?: {[key: string]: outputs.ActionUserPropertiesStringProps};
}

export interface ActionUserPropertiesArrayProps {
    booleanItems?: outputs.ActionUserPropertiesArrayPropsBooleanItems;
    description?: string;
    icon?: string;
    maxItems?: number;
    minItems?: number;
    numberItems?: outputs.ActionUserPropertiesArrayPropsNumberItems;
    objectItems?: outputs.ActionUserPropertiesArrayPropsObjectItems;
    required: boolean;
    stringItems?: outputs.ActionUserPropertiesArrayPropsStringItems;
    title?: string;
}

export interface ActionUserPropertiesArrayPropsBooleanItems {
    defaults?: boolean[];
}

export interface ActionUserPropertiesArrayPropsNumberItems {
    defaults?: number[];
}

export interface ActionUserPropertiesArrayPropsObjectItems {
    defaults?: {[key: string]: string}[];
}

export interface ActionUserPropertiesArrayPropsStringItems {
    blueprint?: string;
    defaults?: string[];
    format?: string;
}

export interface ActionUserPropertiesBooleanProps {
    default?: boolean;
    description?: string;
    icon?: string;
    required: boolean;
    title?: string;
}

export interface ActionUserPropertiesNumberProps {
    default?: number;
    description?: string;
    enums?: number[];
    icon?: string;
    maximum?: number;
    minimum?: number;
    required: boolean;
    title?: string;
}

export interface ActionUserPropertiesObjectProps {
    default?: string;
    description?: string;
    icon?: string;
    required: boolean;
    title?: string;
}

export interface ActionUserPropertiesStringProps {
    blueprint?: string;
    default?: string;
    description?: string;
    enums?: string[];
    format?: string;
    icon?: string;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required: boolean;
    title?: string;
}

export interface ActionWebhookMethod {
    agent?: boolean;
    url: string;
}

export interface BlueprintCalculationProperties {
    calculation: string;
    colorized?: boolean;
    colors?: {[key: string]: string};
    description?: string;
    format?: string;
    icon?: string;
    title?: string;
    type: string;
}

export interface BlueprintKafkaChangelogDestination {
}

export interface BlueprintMirrorProperties {
    path: string;
    title?: string;
}

export interface BlueprintProperties {
    arrayProps?: {[key: string]: outputs.BlueprintPropertiesArrayProps};
    booleanProps?: {[key: string]: outputs.BlueprintPropertiesBooleanProps};
    numberProps?: {[key: string]: outputs.BlueprintPropertiesNumberProps};
    objectProps?: {[key: string]: outputs.BlueprintPropertiesObjectProps};
    stringProps?: {[key: string]: outputs.BlueprintPropertiesStringProps};
}

export interface BlueprintPropertiesArrayProps {
    booleanItems?: outputs.BlueprintPropertiesArrayPropsBooleanItems;
    description?: string;
    icon?: string;
    maxItems?: number;
    minItems?: number;
    numberItems?: outputs.BlueprintPropertiesArrayPropsNumberItems;
    objectItems?: outputs.BlueprintPropertiesArrayPropsObjectItems;
    required: boolean;
    stringItems?: outputs.BlueprintPropertiesArrayPropsStringItems;
    title?: string;
}

export interface BlueprintPropertiesArrayPropsBooleanItems {
    defaults?: boolean[];
}

export interface BlueprintPropertiesArrayPropsNumberItems {
    defaults?: number[];
}

export interface BlueprintPropertiesArrayPropsObjectItems {
    defaults?: string[];
}

export interface BlueprintPropertiesArrayPropsStringItems {
    defaults?: string[];
    format?: string;
}

export interface BlueprintPropertiesBooleanProps {
    default?: boolean;
    description?: string;
    icon?: string;
    required: boolean;
    title?: string;
}

export interface BlueprintPropertiesNumberProps {
    default?: number;
    description?: string;
    enumColors?: {[key: string]: string};
    enums?: number[];
    icon?: string;
    maximum?: number;
    minimum?: number;
    required: boolean;
    title?: string;
}

export interface BlueprintPropertiesObjectProps {
    default?: string;
    description?: string;
    icon?: string;
    required: boolean;
    spec?: string;
    title?: string;
}

export interface BlueprintPropertiesStringProps {
    default?: string;
    description?: string;
    enumColors?: {[key: string]: string};
    enums?: string[];
    format?: string;
    icon?: string;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required: boolean;
    spec?: string;
    specAuthentication?: outputs.BlueprintPropertiesStringPropsSpecAuthentication;
    title?: string;
}

export interface BlueprintPropertiesStringPropsSpecAuthentication {
    authorizationUrl: string;
    clientId: string;
    tokenUrl: string;
}

export interface BlueprintRelations {
    many: boolean;
    required: boolean;
    target: string;
    title?: string;
}

export interface BlueprintTeamInheritance {
    path: string;
}

export interface BlueprintWebhookChangelogDestination {
    agent?: boolean;
    url: string;
}

export interface EntityProperties {
    arrayProps?: outputs.EntityPropertiesArrayProps;
    booleanProps?: {[key: string]: boolean};
    numberProps?: {[key: string]: number};
    objectProps?: {[key: string]: string};
    stringProps?: {[key: string]: string};
}

export interface EntityPropertiesArrayProps {
    booleanItems?: {[key: string]: boolean[]};
    numberItems?: {[key: string]: number[]};
    objectItems?: {[key: string]: string[]};
    stringItems?: {[key: string]: string[]};
}

export interface EntityRelations {
    manyRelations?: {[key: string]: string[]};
    singleRelations?: {[key: string]: string};
}

