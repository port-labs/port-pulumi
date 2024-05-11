// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * This resource allows you to manage aggregation properties of a blueprint.
 *
 * See the [Port documentation](https://docs.getport.io/build-your-software-catalog/define-your-data-model/setup-blueprint/properties/aggregation-properties/) for more information about aggregation properties.
 *
 * Supported Methods:
 *
 * - countEntities - Count the entities of the target blueprint
 * - averageEntities - Average the entities of the target blueprint by time periods
 * - averageByProperty - Calculate the average by property value of the target entities
 * - aggregateByProperty - Calculate the aggregate by property value of the target entities, such as sum, min, max, median
 *
 * ## Example Usage
 *
 * Create a parent blueprint with a child blueprint and an aggregation property to count the parent kids:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as port from "@pulumi/port";
 *
 * const parentBlueprint = new port.index.Port_blueprint("parentBlueprint", {
 *     title: "Parent Blueprint",
 *     icon: "Terraform",
 *     identifier: "parent",
 *     description: "",
 *     properties: {
 *         numberProps: {
 *             age: {
 *                 title: "Age",
 *             },
 *         },
 *     },
 * });
 * const childBlueprint = new port.index.Port_blueprint("childBlueprint", {
 *     title: "Child Blueprint",
 *     icon: "Terraform",
 *     identifier: "child",
 *     description: "",
 *     properties: {
 *         numberProps: {
 *             age: {
 *                 title: "Age",
 *             },
 *         },
 *     },
 *     relations: {
 *         parent: {
 *             title: "Parent",
 *             target: parentBlueprint.identifier,
 *         },
 *     },
 * });
 * const parentAggregationProperties = new port.index.Port_aggregation_properties("parentAggregationProperties", {
 *     blueprintIdentifier: parentBlueprint.identifier,
 *     properties: {
 *         count_kids: {
 *             targetBlueprintIdentifier: childBlueprint.identifier,
 *             title: "Count Kids",
 *             icon: "Terraform",
 *             description: "Count Kids",
 *             method: {
 *                 countEntities: true,
 *             },
 *         },
 *     },
 * });
 * ```
 *
 * Create a parent blueprint with a child blueprint and an aggregation property to calculate the average avg of the parent kids age:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as port from "@pulumi/port";
 *
 * const parentBlueprint = new port.index.Port_blueprint("parentBlueprint", {
 *     title: "Parent Blueprint",
 *     icon: "Terraform",
 *     identifier: "parent",
 *     description: "",
 *     properties: {
 *         numberProps: {
 *             age: {
 *                 title: "Age",
 *             },
 *         },
 *     },
 * });
 * const childBlueprint = new port.index.Port_blueprint("childBlueprint", {
 *     title: "Child Blueprint",
 *     icon: "Terraform",
 *     identifier: "child",
 *     description: "",
 *     properties: {
 *         numberProps: {
 *             age: {
 *                 title: "Age",
 *             },
 *         },
 *     },
 *     relations: {
 *         parent: {
 *             title: "Parent",
 *             target: parentBlueprint.identifier,
 *         },
 *     },
 * });
 * const parentAggregationProperties = new port.index.Port_aggregation_properties("parentAggregationProperties", {
 *     blueprintIdentifier: parentBlueprint.identifier,
 *     properties: {
 *         averageKidsAge: {
 *             targetBlueprintIdentifier: childBlueprint.identifier,
 *             title: "Average Kids Age",
 *             icon: "Terraform",
 *             description: "Average Kids Age",
 *             method: {
 *                 averageByProperty: {
 *                     averageOf: "total",
 *                     measureTimeBy: "$createdAt",
 *                     property: "age",
 *                 },
 *             },
 *         },
 *     },
 * });
 * ```
 *
 * Create a repository blueprint and a pull request blueprint and an aggregation property to calculate the average of pull requests created per day:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as port from "@pulumi/port";
 *
 * const repositoryBlueprint = new port.index.Port_blueprint("repositoryBlueprint", {
 *     title: "Repository Blueprint",
 *     icon: "Terraform",
 *     identifier: "repository",
 *     description: "",
 * });
 * const pullRequestBlueprint = new port.index.Port_blueprint("pullRequestBlueprint", {
 *     title: "Pull Request Blueprint",
 *     icon: "Terraform",
 *     identifier: "pull_request",
 *     description: "",
 *     properties: {
 *         stringProps: {
 *             status: {
 *                 title: "Status",
 *             },
 *         },
 *     },
 *     relations: {
 *         repository: {
 *             title: "Repository",
 *             target: repositoryBlueprint.identifier,
 *         },
 *     },
 * });
 * const repositoryAggregationProperties = new port.index.Port_aggregation_properties("repositoryAggregationProperties", {
 *     blueprintIdentifier: repositoryBlueprint.identifier,
 *     properties: {
 *         pull_requests_per_day: {
 *             targetBlueprintIdentifier: pullRequestBlueprint.identifier,
 *             title: "Pull Requests Per Day",
 *             icon: "Terraform",
 *             description: "Pull Requests Per Day",
 *             method: {
 *                 averageEntities: {
 *                     averageOf: "day",
 *                     measureTimeBy: "$createdAt",
 *                 },
 *             },
 *         },
 *     },
 * });
 * ```
 *
 * Create a repository blueprint and a pull request blueprint and an aggregation property to calculate the average of fix pull request per month:
 *
 * To do that we will add a query to the aggregation property to filter only pull requests with fixed title:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as port from "@pulumi/port";
 *
 * const repositoryBlueprint = new port.index.Port_blueprint("repositoryBlueprint", {
 *     title: "Repository Blueprint",
 *     icon: "Terraform",
 *     identifier: "repository",
 *     description: "",
 * });
 * const pullRequestBlueprint = new port.index.Port_blueprint("pullRequestBlueprint", {
 *     title: "Pull Request Blueprint",
 *     icon: "Terraform",
 *     identifier: "pull_request",
 *     description: "",
 *     properties: {
 *         stringProps: {
 *             status: {
 *                 title: "Status",
 *             },
 *         },
 *     },
 *     relations: {
 *         repository: {
 *             title: "Repository",
 *             target: repositoryBlueprint.identifier,
 *         },
 *     },
 * });
 * const repositoryAggregationProperties = new port.index.Port_aggregation_properties("repositoryAggregationProperties", {
 *     blueprintIdentifier: repositoryBlueprint.identifier,
 *     properties: {
 *         fix_pull_requests_count: {
 *             targetBlueprintIdentifier: pullRequestBlueprint.identifier,
 *             title: "Pull Requests Per Day",
 *             icon: "Terraform",
 *             description: "Pull Requests Per Day",
 *             method: {
 *                 averageEntities: {
 *                     averageOf: "month",
 *                     measureTimeBy: "$createdAt",
 *                 },
 *             },
 *             query: JSON.stringify({
 *                 combinator: "and",
 *                 rules: [{
 *                     property: "$title",
 *                     operator: "ContainsAny",
 *                     value: [
 *                         "fix",
 *                         "fixed",
 *                         "fixing",
 *                         "Fix",
 *                     ],
 *                 }],
 *             }),
 *         },
 *     },
 * });
 * ```
 *
 * Create multiple aggregation properties in one resource:
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as port from "@pulumi/port";
 *
 * const repositoryBlueprint = new port.index.Port_blueprint("repositoryBlueprint", {
 *     title: "Repository Blueprint",
 *     icon: "Terraform",
 *     identifier: "repository",
 *     description: "",
 * });
 * const pullRequestBlueprint = new port.index.Port_blueprint("pullRequestBlueprint", {
 *     title: "Pull Request Blueprint",
 *     icon: "Terraform",
 *     identifier: "pull_request",
 *     description: "",
 *     properties: {
 *         stringProps: {
 *             status: {
 *                 title: "Status",
 *             },
 *         },
 *     },
 *     relations: {
 *         repository: {
 *             title: "Repository",
 *             target: repositoryBlueprint.identifier,
 *         },
 *     },
 * });
 * const repositoryAggregationProperties = new port.index.Port_aggregation_properties("repositoryAggregationProperties", {
 *     blueprintIdentifier: repositoryBlueprint.identifier,
 *     properties: {
 *         pull_requests_per_day: {
 *             targetBlueprintIdentifier: pullRequestBlueprint.identifier,
 *             title: "Pull Requests Per Day",
 *             icon: "Terraform",
 *             description: "Pull Requests Per Day",
 *             method: {
 *                 averageEntities: {
 *                     averageOf: "day",
 *                     measureTimeBy: "$createdAt",
 *                 },
 *             },
 *         },
 *         overall_pull_requests_count: {
 *             targetBlueprintIdentifier: pullRequestBlueprint.identifier,
 *             title: "Overall Pull Requests Count",
 *             icon: "Terraform",
 *             description: "Overall Pull Requests Count",
 *             method: {
 *                 countEntities: true,
 *             },
 *         },
 *     },
 * });
 * ```
 */
export class AggregationProperties extends pulumi.CustomResource {
    /**
     * Get an existing AggregationProperties resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AggregationPropertiesState, opts?: pulumi.CustomResourceOptions): AggregationProperties {
        return new AggregationProperties(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'port:index/aggregationProperties:AggregationProperties';

    /**
     * Returns true if the given object is an instance of AggregationProperties.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AggregationProperties {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AggregationProperties.__pulumiType;
    }

    /**
     * The identifier of the blueprint the aggregation property will be added to
     */
    public readonly blueprintIdentifier!: pulumi.Output<string>;
    /**
     * The aggregation property of the blueprint
     */
    public readonly properties!: pulumi.Output<{[key: string]: outputs.AggregationPropertiesProperties}>;

    /**
     * Create a AggregationProperties resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AggregationPropertiesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AggregationPropertiesArgs | AggregationPropertiesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AggregationPropertiesState | undefined;
            resourceInputs["blueprintIdentifier"] = state ? state.blueprintIdentifier : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
        } else {
            const args = argsOrState as AggregationPropertiesArgs | undefined;
            if ((!args || args.blueprintIdentifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blueprintIdentifier'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            resourceInputs["blueprintIdentifier"] = args ? args.blueprintIdentifier : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AggregationProperties.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering AggregationProperties resources.
 */
export interface AggregationPropertiesState {
    /**
     * The identifier of the blueprint the aggregation property will be added to
     */
    blueprintIdentifier?: pulumi.Input<string>;
    /**
     * The aggregation property of the blueprint
     */
    properties?: pulumi.Input<{[key: string]: pulumi.Input<inputs.AggregationPropertiesProperties>}>;
}

/**
 * The set of arguments for constructing a AggregationProperties resource.
 */
export interface AggregationPropertiesArgs {
    /**
     * The identifier of the blueprint the aggregation property will be added to
     */
    blueprintIdentifier: pulumi.Input<string>;
    /**
     * The aggregation property of the blueprint
     */
    properties: pulumi.Input<{[key: string]: pulumi.Input<inputs.AggregationPropertiesProperties>}>;
}
