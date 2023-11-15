// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ActionApprovalEmailNotification {
}

export interface ActionApprovalWebhookNotification {
    url: pulumi.Input<string>;
}

export interface ActionAzureMethod {
    org: pulumi.Input<string>;
    webhook: pulumi.Input<string>;
}

export interface ActionGithubMethod {
    omitPayload?: pulumi.Input<boolean>;
    omitUserInputs?: pulumi.Input<boolean>;
    org: pulumi.Input<string>;
    repo: pulumi.Input<string>;
    reportWorkflowStatus?: pulumi.Input<boolean>;
    workflow: pulumi.Input<string>;
}

export interface ActionGitlabMethod {
    agent?: pulumi.Input<boolean>;
    defaultRef?: pulumi.Input<string>;
    groupName: pulumi.Input<string>;
    omitPayload?: pulumi.Input<boolean>;
    omitUserInputs?: pulumi.Input<boolean>;
    projectName: pulumi.Input<string>;
}

export interface ActionKafkaMethod {
}

export interface ActionUserProperties {
    arrayProps?: pulumi.Input<{[key: string]: pulumi.Input<inputs.ActionUserPropertiesArrayProps>}>;
    booleanProps?: pulumi.Input<{[key: string]: pulumi.Input<inputs.ActionUserPropertiesBooleanProps>}>;
    numberProps?: pulumi.Input<{[key: string]: pulumi.Input<inputs.ActionUserPropertiesNumberProps>}>;
    objectProps?: pulumi.Input<{[key: string]: pulumi.Input<inputs.ActionUserPropertiesObjectProps>}>;
    stringProps?: pulumi.Input<{[key: string]: pulumi.Input<inputs.ActionUserPropertiesStringProps>}>;
}

export interface ActionUserPropertiesArrayProps {
    booleanItems?: pulumi.Input<inputs.ActionUserPropertiesArrayPropsBooleanItems>;
    dataset?: pulumi.Input<inputs.ActionUserPropertiesArrayPropsDataset>;
    defaultJqQuery?: pulumi.Input<string>;
    dependsOns?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    icon?: pulumi.Input<string>;
    maxItems?: pulumi.Input<number>;
    minItems?: pulumi.Input<number>;
    numberItems?: pulumi.Input<inputs.ActionUserPropertiesArrayPropsNumberItems>;
    objectItems?: pulumi.Input<inputs.ActionUserPropertiesArrayPropsObjectItems>;
    required?: pulumi.Input<boolean>;
    stringItems?: pulumi.Input<inputs.ActionUserPropertiesArrayPropsStringItems>;
    title?: pulumi.Input<string>;
    visible?: pulumi.Input<boolean>;
    visibleJqQuery?: pulumi.Input<string>;
}

export interface ActionUserPropertiesArrayPropsBooleanItems {
    defaults?: pulumi.Input<pulumi.Input<boolean>[]>;
}

export interface ActionUserPropertiesArrayPropsDataset {
    combinator: pulumi.Input<string>;
    rules: pulumi.Input<pulumi.Input<inputs.ActionUserPropertiesArrayPropsDatasetRule>[]>;
}

export interface ActionUserPropertiesArrayPropsDatasetRule {
    blueprint?: pulumi.Input<string>;
    operator: pulumi.Input<string>;
    property?: pulumi.Input<string>;
    value: pulumi.Input<inputs.ActionUserPropertiesArrayPropsDatasetRuleValue>;
}

export interface ActionUserPropertiesArrayPropsDatasetRuleValue {
    jqQuery: pulumi.Input<string>;
}

export interface ActionUserPropertiesArrayPropsNumberItems {
    defaults?: pulumi.Input<pulumi.Input<number>[]>;
    enumJqQuery?: pulumi.Input<string>;
    enums?: pulumi.Input<pulumi.Input<number>[]>;
}

export interface ActionUserPropertiesArrayPropsObjectItems {
    defaults?: pulumi.Input<pulumi.Input<{[key: string]: pulumi.Input<string>}>[]>;
}

export interface ActionUserPropertiesArrayPropsStringItems {
    blueprint?: pulumi.Input<string>;
    defaults?: pulumi.Input<pulumi.Input<string>[]>;
    enumJqQuery?: pulumi.Input<string>;
    enums?: pulumi.Input<pulumi.Input<string>[]>;
    format?: pulumi.Input<string>;
}

export interface ActionUserPropertiesBooleanProps {
    dataset?: pulumi.Input<inputs.ActionUserPropertiesBooleanPropsDataset>;
    default?: pulumi.Input<boolean>;
    defaultJqQuery?: pulumi.Input<string>;
    dependsOns?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    icon?: pulumi.Input<string>;
    required?: pulumi.Input<boolean>;
    title?: pulumi.Input<string>;
    visible?: pulumi.Input<boolean>;
    visibleJqQuery?: pulumi.Input<string>;
}

export interface ActionUserPropertiesBooleanPropsDataset {
    combinator: pulumi.Input<string>;
    rules: pulumi.Input<pulumi.Input<inputs.ActionUserPropertiesBooleanPropsDatasetRule>[]>;
}

export interface ActionUserPropertiesBooleanPropsDatasetRule {
    blueprint?: pulumi.Input<string>;
    operator: pulumi.Input<string>;
    property?: pulumi.Input<string>;
    value: pulumi.Input<inputs.ActionUserPropertiesBooleanPropsDatasetRuleValue>;
}

export interface ActionUserPropertiesBooleanPropsDatasetRuleValue {
    jqQuery: pulumi.Input<string>;
}

export interface ActionUserPropertiesNumberProps {
    dataset?: pulumi.Input<inputs.ActionUserPropertiesNumberPropsDataset>;
    default?: pulumi.Input<number>;
    defaultJqQuery?: pulumi.Input<string>;
    dependsOns?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    enumJqQuery?: pulumi.Input<string>;
    enums?: pulumi.Input<pulumi.Input<number>[]>;
    icon?: pulumi.Input<string>;
    maximum?: pulumi.Input<number>;
    minimum?: pulumi.Input<number>;
    required?: pulumi.Input<boolean>;
    title?: pulumi.Input<string>;
    visible?: pulumi.Input<boolean>;
    visibleJqQuery?: pulumi.Input<string>;
}

export interface ActionUserPropertiesNumberPropsDataset {
    combinator: pulumi.Input<string>;
    rules: pulumi.Input<pulumi.Input<inputs.ActionUserPropertiesNumberPropsDatasetRule>[]>;
}

export interface ActionUserPropertiesNumberPropsDatasetRule {
    blueprint?: pulumi.Input<string>;
    operator: pulumi.Input<string>;
    property?: pulumi.Input<string>;
    value: pulumi.Input<inputs.ActionUserPropertiesNumberPropsDatasetRuleValue>;
}

export interface ActionUserPropertiesNumberPropsDatasetRuleValue {
    jqQuery: pulumi.Input<string>;
}

export interface ActionUserPropertiesObjectProps {
    dataset?: pulumi.Input<inputs.ActionUserPropertiesObjectPropsDataset>;
    default?: pulumi.Input<string>;
    defaultJqQuery?: pulumi.Input<string>;
    dependsOns?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    encryption?: pulumi.Input<string>;
    icon?: pulumi.Input<string>;
    required?: pulumi.Input<boolean>;
    title?: pulumi.Input<string>;
    visible?: pulumi.Input<boolean>;
    visibleJqQuery?: pulumi.Input<string>;
}

export interface ActionUserPropertiesObjectPropsDataset {
    combinator: pulumi.Input<string>;
    rules: pulumi.Input<pulumi.Input<inputs.ActionUserPropertiesObjectPropsDatasetRule>[]>;
}

export interface ActionUserPropertiesObjectPropsDatasetRule {
    blueprint?: pulumi.Input<string>;
    operator: pulumi.Input<string>;
    property?: pulumi.Input<string>;
    value: pulumi.Input<inputs.ActionUserPropertiesObjectPropsDatasetRuleValue>;
}

export interface ActionUserPropertiesObjectPropsDatasetRuleValue {
    jqQuery: pulumi.Input<string>;
}

export interface ActionUserPropertiesStringProps {
    blueprint?: pulumi.Input<string>;
    dataset?: pulumi.Input<inputs.ActionUserPropertiesStringPropsDataset>;
    default?: pulumi.Input<string>;
    defaultJqQuery?: pulumi.Input<string>;
    dependsOns?: pulumi.Input<pulumi.Input<string>[]>;
    description?: pulumi.Input<string>;
    encryption?: pulumi.Input<string>;
    enumJqQuery?: pulumi.Input<string>;
    enums?: pulumi.Input<pulumi.Input<string>[]>;
    format?: pulumi.Input<string>;
    icon?: pulumi.Input<string>;
    maxLength?: pulumi.Input<number>;
    minLength?: pulumi.Input<number>;
    pattern?: pulumi.Input<string>;
    required?: pulumi.Input<boolean>;
    title?: pulumi.Input<string>;
    visible?: pulumi.Input<boolean>;
    visibleJqQuery?: pulumi.Input<string>;
}

export interface ActionUserPropertiesStringPropsDataset {
    combinator: pulumi.Input<string>;
    rules: pulumi.Input<pulumi.Input<inputs.ActionUserPropertiesStringPropsDatasetRule>[]>;
}

export interface ActionUserPropertiesStringPropsDatasetRule {
    blueprint?: pulumi.Input<string>;
    operator: pulumi.Input<string>;
    property?: pulumi.Input<string>;
    value: pulumi.Input<inputs.ActionUserPropertiesStringPropsDatasetRuleValue>;
}

export interface ActionUserPropertiesStringPropsDatasetRuleValue {
    jqQuery: pulumi.Input<string>;
}

export interface ActionWebhookMethod {
    agent?: pulumi.Input<boolean>;
    method?: pulumi.Input<string>;
    synchronized?: pulumi.Input<boolean>;
    url: pulumi.Input<string>;
}

export interface BlueprintCalculationProperties {
    calculation: pulumi.Input<string>;
    colorized?: pulumi.Input<boolean>;
    colors?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    format?: pulumi.Input<string>;
    icon?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
    type: pulumi.Input<string>;
}

export interface BlueprintKafkaChangelogDestination {
}

export interface BlueprintMirrorProperties {
    path: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}

export interface BlueprintProperties {
    arrayProps?: pulumi.Input<{[key: string]: pulumi.Input<inputs.BlueprintPropertiesArrayProps>}>;
    booleanProps?: pulumi.Input<{[key: string]: pulumi.Input<inputs.BlueprintPropertiesBooleanProps>}>;
    numberProps?: pulumi.Input<{[key: string]: pulumi.Input<inputs.BlueprintPropertiesNumberProps>}>;
    objectProps?: pulumi.Input<{[key: string]: pulumi.Input<inputs.BlueprintPropertiesObjectProps>}>;
    stringProps?: pulumi.Input<{[key: string]: pulumi.Input<inputs.BlueprintPropertiesStringProps>}>;
}

export interface BlueprintPropertiesArrayProps {
    booleanItems?: pulumi.Input<inputs.BlueprintPropertiesArrayPropsBooleanItems>;
    description?: pulumi.Input<string>;
    icon?: pulumi.Input<string>;
    maxItems?: pulumi.Input<number>;
    minItems?: pulumi.Input<number>;
    numberItems?: pulumi.Input<inputs.BlueprintPropertiesArrayPropsNumberItems>;
    objectItems?: pulumi.Input<inputs.BlueprintPropertiesArrayPropsObjectItems>;
    required?: pulumi.Input<boolean>;
    stringItems?: pulumi.Input<inputs.BlueprintPropertiesArrayPropsStringItems>;
    title?: pulumi.Input<string>;
}

export interface BlueprintPropertiesArrayPropsBooleanItems {
    defaults?: pulumi.Input<pulumi.Input<boolean>[]>;
}

export interface BlueprintPropertiesArrayPropsNumberItems {
    defaults?: pulumi.Input<pulumi.Input<number>[]>;
}

export interface BlueprintPropertiesArrayPropsObjectItems {
    defaults?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface BlueprintPropertiesArrayPropsStringItems {
    defaults?: pulumi.Input<pulumi.Input<string>[]>;
    format?: pulumi.Input<string>;
}

export interface BlueprintPropertiesBooleanProps {
    default?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    icon?: pulumi.Input<string>;
    required?: pulumi.Input<boolean>;
    title?: pulumi.Input<string>;
}

export interface BlueprintPropertiesNumberProps {
    default?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    enumColors?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    enums?: pulumi.Input<pulumi.Input<number>[]>;
    icon?: pulumi.Input<string>;
    maximum?: pulumi.Input<number>;
    minimum?: pulumi.Input<number>;
    required?: pulumi.Input<boolean>;
    title?: pulumi.Input<string>;
}

export interface BlueprintPropertiesObjectProps {
    default?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    icon?: pulumi.Input<string>;
    required?: pulumi.Input<boolean>;
    spec?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}

export interface BlueprintPropertiesStringProps {
    default?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enumColors?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    enums?: pulumi.Input<pulumi.Input<string>[]>;
    format?: pulumi.Input<string>;
    icon?: pulumi.Input<string>;
    maxLength?: pulumi.Input<number>;
    minLength?: pulumi.Input<number>;
    pattern?: pulumi.Input<string>;
    required?: pulumi.Input<boolean>;
    spec?: pulumi.Input<string>;
    specAuthentication?: pulumi.Input<inputs.BlueprintPropertiesStringPropsSpecAuthentication>;
    title?: pulumi.Input<string>;
}

export interface BlueprintPropertiesStringPropsSpecAuthentication {
    authorizationUrl: pulumi.Input<string>;
    clientId: pulumi.Input<string>;
    tokenUrl: pulumi.Input<string>;
}

export interface BlueprintRelations {
    many?: pulumi.Input<boolean>;
    required?: pulumi.Input<boolean>;
    target: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}

export interface BlueprintTeamInheritance {
    path: pulumi.Input<string>;
}

export interface BlueprintWebhookChangelogDestination {
    agent?: pulumi.Input<boolean>;
    url: pulumi.Input<string>;
}

export interface EntityProperties {
    arrayProps?: pulumi.Input<inputs.EntityPropertiesArrayProps>;
    booleanProps?: pulumi.Input<{[key: string]: pulumi.Input<boolean>}>;
    numberProps?: pulumi.Input<{[key: string]: pulumi.Input<number>}>;
    objectProps?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    stringProps?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface EntityPropertiesArrayProps {
    booleanItems?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<boolean>[]>}>;
    numberItems?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<number>[]>}>;
    objectItems?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
    stringItems?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
}

export interface EntityRelations {
    manyRelations?: pulumi.Input<{[key: string]: pulumi.Input<pulumi.Input<string>[]>}>;
    singleRelations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

export interface ScorecardRule {
    identifier: pulumi.Input<string>;
    level: pulumi.Input<string>;
    query: pulumi.Input<inputs.ScorecardRuleQuery>;
    title: pulumi.Input<string>;
}

export interface ScorecardRuleQuery {
    combinator: pulumi.Input<string>;
    conditions: pulumi.Input<pulumi.Input<inputs.ScorecardRuleQueryCondition>[]>;
}

export interface ScorecardRuleQueryCondition {
    operator: pulumi.Input<string>;
    property: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}

export interface WebhookMapping {
    blueprint: pulumi.Input<string>;
    entity: pulumi.Input<inputs.WebhookMappingEntity>;
    filter?: pulumi.Input<string>;
    itemsToParse?: pulumi.Input<string>;
}

export interface WebhookMappingEntity {
    icon?: pulumi.Input<string>;
    identifier: pulumi.Input<string>;
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    relations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    team?: pulumi.Input<string>;
    title?: pulumi.Input<string>;
}

export interface WebhookSecurity {
    requestIdentifierPath?: pulumi.Input<string>;
    secret?: pulumi.Input<string>;
    signatureAlgorithm?: pulumi.Input<string>;
    signatureHeaderName?: pulumi.Input<string>;
    signaturePrefix?: pulumi.Input<string>;
}
