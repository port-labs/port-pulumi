// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Webhook resource
 */
export class Webhook extends pulumi.CustomResource {
    /**
     * Get an existing Webhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebhookState, opts?: pulumi.CustomResourceOptions): Webhook {
        return new Webhook(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'port:index/webhook:Webhook';

    /**
     * Returns true if the given object is an instance of Webhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Webhook {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Webhook.__pulumiType;
    }

    /**
     * The creation date of the webhook
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The creator of the webhook
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * The description of the webhook
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Whether the webhook is enabled
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The icon of the webhook
     */
    public readonly icon!: pulumi.Output<string | undefined>;
    /**
     * The identifier of the webhook
     */
    public readonly identifier!: pulumi.Output<string>;
    /**
     * The mappings of the webhook
     */
    public readonly mappings!: pulumi.Output<outputs.WebhookMapping[] | undefined>;
    /**
     * The security of the webhook
     */
    public readonly security!: pulumi.Output<outputs.WebhookSecurity | undefined>;
    /**
     * The title of the webhook
     */
    public readonly title!: pulumi.Output<string | undefined>;
    /**
     * The last update date of the webhook
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The last updater of the webhook
     */
    public /*out*/ readonly updatedBy!: pulumi.Output<string>;
    /**
     * The url of the webhook
     */
    public /*out*/ readonly url!: pulumi.Output<string>;
    /**
     * The webhook key of the webhook
     */
    public /*out*/ readonly webhookKey!: pulumi.Output<string>;

    /**
     * Create a Webhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WebhookArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebhookArgs | WebhookState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebhookState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["icon"] = state ? state.icon : undefined;
            resourceInputs["identifier"] = state ? state.identifier : undefined;
            resourceInputs["mappings"] = state ? state.mappings : undefined;
            resourceInputs["security"] = state ? state.security : undefined;
            resourceInputs["title"] = state ? state.title : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["updatedBy"] = state ? state.updatedBy : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["webhookKey"] = state ? state.webhookKey : undefined;
        } else {
            const args = argsOrState as WebhookArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["icon"] = args ? args.icon : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["mappings"] = args ? args.mappings : undefined;
            resourceInputs["security"] = args ? args.security : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
            resourceInputs["updatedBy"] = undefined /*out*/;
            resourceInputs["url"] = undefined /*out*/;
            resourceInputs["webhookKey"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Webhook.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Webhook resources.
 */
export interface WebhookState {
    /**
     * The creation date of the webhook
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The creator of the webhook
     */
    createdBy?: pulumi.Input<string>;
    /**
     * The description of the webhook
     */
    description?: pulumi.Input<string>;
    /**
     * Whether the webhook is enabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The icon of the webhook
     */
    icon?: pulumi.Input<string>;
    /**
     * The identifier of the webhook
     */
    identifier?: pulumi.Input<string>;
    /**
     * The mappings of the webhook
     */
    mappings?: pulumi.Input<pulumi.Input<inputs.WebhookMapping>[]>;
    /**
     * The security of the webhook
     */
    security?: pulumi.Input<inputs.WebhookSecurity>;
    /**
     * The title of the webhook
     */
    title?: pulumi.Input<string>;
    /**
     * The last update date of the webhook
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * The last updater of the webhook
     */
    updatedBy?: pulumi.Input<string>;
    /**
     * The url of the webhook
     */
    url?: pulumi.Input<string>;
    /**
     * The webhook key of the webhook
     */
    webhookKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Webhook resource.
 */
export interface WebhookArgs {
    /**
     * The description of the webhook
     */
    description?: pulumi.Input<string>;
    /**
     * Whether the webhook is enabled
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The icon of the webhook
     */
    icon?: pulumi.Input<string>;
    /**
     * The identifier of the webhook
     */
    identifier?: pulumi.Input<string>;
    /**
     * The mappings of the webhook
     */
    mappings?: pulumi.Input<pulumi.Input<inputs.WebhookMapping>[]>;
    /**
     * The security of the webhook
     */
    security?: pulumi.Input<inputs.WebhookSecurity>;
    /**
     * The title of the webhook
     */
    title?: pulumi.Input<string>;
}
