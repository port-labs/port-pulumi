// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ActionArgs, ActionState } from "./action";
export type Action = import("./action").Action;
export const Action: typeof import("./action").Action = null as any;
utilities.lazyLoad(exports, ["Action"], () => require("./action"));

export { ActionPermissionsArgs, ActionPermissionsState } from "./actionPermissions";
export type ActionPermissions = import("./actionPermissions").ActionPermissions;
export const ActionPermissions: typeof import("./actionPermissions").ActionPermissions = null as any;
utilities.lazyLoad(exports, ["ActionPermissions"], () => require("./actionPermissions"));

export { AggregationPropertiesArgs, AggregationPropertiesState } from "./aggregationProperties";
export type AggregationProperties = import("./aggregationProperties").AggregationProperties;
export const AggregationProperties: typeof import("./aggregationProperties").AggregationProperties = null as any;
utilities.lazyLoad(exports, ["AggregationProperties"], () => require("./aggregationProperties"));

export { BlueprintArgs, BlueprintState } from "./blueprint";
export type Blueprint = import("./blueprint").Blueprint;
export const Blueprint: typeof import("./blueprint").Blueprint = null as any;
utilities.lazyLoad(exports, ["Blueprint"], () => require("./blueprint"));

export { EntityArgs, EntityState } from "./entity";
export type Entity = import("./entity").Entity;
export const Entity: typeof import("./entity").Entity = null as any;
utilities.lazyLoad(exports, ["Entity"], () => require("./entity"));

export { PageArgs, PageState } from "./page";
export type Page = import("./page").Page;
export const Page: typeof import("./page").Page = null as any;
utilities.lazyLoad(exports, ["Page"], () => require("./page"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

export { ScorecardArgs, ScorecardState } from "./scorecard";
export type Scorecard = import("./scorecard").Scorecard;
export const Scorecard: typeof import("./scorecard").Scorecard = null as any;
utilities.lazyLoad(exports, ["Scorecard"], () => require("./scorecard"));

export { TeamArgs, TeamState } from "./team";
export type Team = import("./team").Team;
export const Team: typeof import("./team").Team = null as any;
utilities.lazyLoad(exports, ["Team"], () => require("./team"));

export { WebhookArgs, WebhookState } from "./webhook";
export type Webhook = import("./webhook").Webhook;
export const Webhook: typeof import("./webhook").Webhook = null as any;
utilities.lazyLoad(exports, ["Webhook"], () => require("./webhook"));


// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "port:index/action:Action":
                return new Action(name, <any>undefined, { urn })
            case "port:index/actionPermissions:ActionPermissions":
                return new ActionPermissions(name, <any>undefined, { urn })
            case "port:index/aggregationProperties:AggregationProperties":
                return new AggregationProperties(name, <any>undefined, { urn })
            case "port:index/blueprint:Blueprint":
                return new Blueprint(name, <any>undefined, { urn })
            case "port:index/entity:Entity":
                return new Entity(name, <any>undefined, { urn })
            case "port:index/page:Page":
                return new Page(name, <any>undefined, { urn })
            case "port:index/scorecard:Scorecard":
                return new Scorecard(name, <any>undefined, { urn })
            case "port:index/team:Team":
                return new Team(name, <any>undefined, { urn })
            case "port:index/webhook:Webhook":
                return new Webhook(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("port", "index/action", _module)
pulumi.runtime.registerResourceModule("port", "index/actionPermissions", _module)
pulumi.runtime.registerResourceModule("port", "index/aggregationProperties", _module)
pulumi.runtime.registerResourceModule("port", "index/blueprint", _module)
pulumi.runtime.registerResourceModule("port", "index/entity", _module)
pulumi.runtime.registerResourceModule("port", "index/page", _module)
pulumi.runtime.registerResourceModule("port", "index/scorecard", _module)
pulumi.runtime.registerResourceModule("port", "index/team", _module)
pulumi.runtime.registerResourceModule("port", "index/webhook", _module)
pulumi.runtime.registerResourcePackage("port", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:port") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
