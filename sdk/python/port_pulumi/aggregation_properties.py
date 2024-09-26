# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import copy
import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities
from . import outputs
from ._inputs import *

__all__ = ['AggregationPropertiesArgs', 'AggregationProperties']

@pulumi.input_type
class AggregationPropertiesArgs:
    def __init__(__self__, *,
                 blueprint_identifier: pulumi.Input[str],
                 properties: pulumi.Input[Mapping[str, pulumi.Input['AggregationPropertiesPropertiesArgs']]]):
        """
        The set of arguments for constructing a AggregationProperties resource.
        :param pulumi.Input[str] blueprint_identifier: The identifier of the blueprint the aggregation property will be added to
        :param pulumi.Input[Mapping[str, pulumi.Input['AggregationPropertiesPropertiesArgs']]] properties: The aggregation property of the blueprint
        """
        pulumi.set(__self__, "blueprint_identifier", blueprint_identifier)
        pulumi.set(__self__, "properties", properties)

    @property
    @pulumi.getter(name="blueprintIdentifier")
    def blueprint_identifier(self) -> pulumi.Input[str]:
        """
        The identifier of the blueprint the aggregation property will be added to
        """
        return pulumi.get(self, "blueprint_identifier")

    @blueprint_identifier.setter
    def blueprint_identifier(self, value: pulumi.Input[str]):
        pulumi.set(self, "blueprint_identifier", value)

    @property
    @pulumi.getter
    def properties(self) -> pulumi.Input[Mapping[str, pulumi.Input['AggregationPropertiesPropertiesArgs']]]:
        """
        The aggregation property of the blueprint
        """
        return pulumi.get(self, "properties")

    @properties.setter
    def properties(self, value: pulumi.Input[Mapping[str, pulumi.Input['AggregationPropertiesPropertiesArgs']]]):
        pulumi.set(self, "properties", value)


@pulumi.input_type
class _AggregationPropertiesState:
    def __init__(__self__, *,
                 blueprint_identifier: Optional[pulumi.Input[str]] = None,
                 properties: Optional[pulumi.Input[Mapping[str, pulumi.Input['AggregationPropertiesPropertiesArgs']]]] = None):
        """
        Input properties used for looking up and filtering AggregationProperties resources.
        :param pulumi.Input[str] blueprint_identifier: The identifier of the blueprint the aggregation property will be added to
        :param pulumi.Input[Mapping[str, pulumi.Input['AggregationPropertiesPropertiesArgs']]] properties: The aggregation property of the blueprint
        """
        if blueprint_identifier is not None:
            pulumi.set(__self__, "blueprint_identifier", blueprint_identifier)
        if properties is not None:
            pulumi.set(__self__, "properties", properties)

    @property
    @pulumi.getter(name="blueprintIdentifier")
    def blueprint_identifier(self) -> Optional[pulumi.Input[str]]:
        """
        The identifier of the blueprint the aggregation property will be added to
        """
        return pulumi.get(self, "blueprint_identifier")

    @blueprint_identifier.setter
    def blueprint_identifier(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "blueprint_identifier", value)

    @property
    @pulumi.getter
    def properties(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input['AggregationPropertiesPropertiesArgs']]]]:
        """
        The aggregation property of the blueprint
        """
        return pulumi.get(self, "properties")

    @properties.setter
    def properties(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input['AggregationPropertiesPropertiesArgs']]]]):
        pulumi.set(self, "properties", value)


class AggregationProperties(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 blueprint_identifier: Optional[pulumi.Input[str]] = None,
                 properties: Optional[pulumi.Input[Mapping[str, pulumi.Input[Union['AggregationPropertiesPropertiesArgs', 'AggregationPropertiesPropertiesArgsDict']]]]] = None,
                 __props__=None):
        """
        This resource allows you to manage aggregation properties of a blueprint.

        See the [Port documentation](https://docs.getport.io/build-your-software-catalog/customize-integrations/configure-data-model/setup-blueprint/properties/aggregation-property/) for more information about aggregation properties.

        Supported Methods:

        - count_entities - Count the entities of the target blueprint
        - average_entities - Average the entities of the target blueprint by time periods
        - average_by_property - Calculate the average by property value of the target entities
        - aggregate_by_property - Calculate the aggregate by property value of the target entities, such as sum, min, max, median

        ## Example Usage

        Create a parent blueprint with a child blueprint and an aggregation property to count the parent kids:

        ```python
        import pulumi
        import pulumi_port as port

        parent_blueprint = port.index.Port_blueprint("parentBlueprint",
            title=Parent Blueprint,
            icon=Terraform,
            identifier=parent,
            description=,
            properties={
                numberProps: {
                    age: {
                        title: Age,
                    },
                },
            })
        child_blueprint = port.index.Port_blueprint("childBlueprint",
            title=Child Blueprint,
            icon=Terraform,
            identifier=child,
            description=,
            properties={
                numberProps: {
                    age: {
                        title: Age,
                    },
                },
            },
            relations={
                parent: {
                    title: Parent,
                    target: parent_blueprint.identifier,
                },
            })
        parent_aggregation_properties = port.index.Port_aggregation_properties("parentAggregationProperties",
            blueprint_identifier=parent_blueprint.identifier,
            properties={
                count_kids: {
                    targetBlueprintIdentifier: child_blueprint.identifier,
                    title: Count Kids,
                    icon: Terraform,
                    description: Count Kids,
                    method: {
                        countEntities: True,
                    },
                },
            })
        ```

        Create a parent blueprint with a child blueprint and an aggregation property to calculate the average avg of the parent kids age:

        ```python
        import pulumi
        import pulumi_port as port

        parent_blueprint = port.index.Port_blueprint("parentBlueprint",
            title=Parent Blueprint,
            icon=Terraform,
            identifier=parent,
            description=,
            properties={
                numberProps: {
                    age: {
                        title: Age,
                    },
                },
            })
        child_blueprint = port.index.Port_blueprint("childBlueprint",
            title=Child Blueprint,
            icon=Terraform,
            identifier=child,
            description=,
            properties={
                numberProps: {
                    age: {
                        title: Age,
                    },
                },
            },
            relations={
                parent: {
                    title: Parent,
                    target: parent_blueprint.identifier,
                },
            })
        parent_aggregation_properties = port.index.Port_aggregation_properties("parentAggregationProperties",
            blueprint_identifier=parent_blueprint.identifier,
            properties={
                averageKidsAge: {
                    targetBlueprintIdentifier: child_blueprint.identifier,
                    title: Average Kids Age,
                    icon: Terraform,
                    description: Average Kids Age,
                    method: {
                        averageByProperty: {
                            averageOf: total,
                            measureTimeBy: $createdAt,
                            property: age,
                        },
                    },
                },
            })
        ```

        Create a repository blueprint and a pull request blueprint and an aggregation property to calculate the average of pull requests created per day:

        ```python
        import pulumi
        import pulumi_port as port

        repository_blueprint = port.index.Port_blueprint("repositoryBlueprint",
            title=Repository Blueprint,
            icon=Terraform,
            identifier=repository,
            description=)
        pull_request_blueprint = port.index.Port_blueprint("pullRequestBlueprint",
            title=Pull Request Blueprint,
            icon=Terraform,
            identifier=pull_request,
            description=,
            properties={
                stringProps: {
                    status: {
                        title: Status,
                    },
                },
            },
            relations={
                repository: {
                    title: Repository,
                    target: repository_blueprint.identifier,
                },
            })
        repository_aggregation_properties = port.index.Port_aggregation_properties("repositoryAggregationProperties",
            blueprint_identifier=repository_blueprint.identifier,
            properties={
                pull_requests_per_day: {
                    targetBlueprintIdentifier: pull_request_blueprint.identifier,
                    title: Pull Requests Per Day,
                    icon: Terraform,
                    description: Pull Requests Per Day,
                    method: {
                        averageEntities: {
                            averageOf: day,
                            measureTimeBy: $createdAt,
                        },
                    },
                },
            })
        ```

        Create a repository blueprint and a pull request blueprint and an aggregation property to calculate the average of fix pull request per month:

        To do that we will add a query to the aggregation property to filter only pull requests with fixed title:

        ```python
        import pulumi
        import json
        import pulumi_port as port

        repository_blueprint = port.index.Port_blueprint("repositoryBlueprint",
            title=Repository Blueprint,
            icon=Terraform,
            identifier=repository,
            description=)
        pull_request_blueprint = port.index.Port_blueprint("pullRequestBlueprint",
            title=Pull Request Blueprint,
            icon=Terraform,
            identifier=pull_request,
            description=,
            properties={
                stringProps: {
                    status: {
                        title: Status,
                    },
                },
            },
            relations={
                repository: {
                    title: Repository,
                    target: repository_blueprint.identifier,
                },
            })
        repository_aggregation_properties = port.index.Port_aggregation_properties("repositoryAggregationProperties",
            blueprint_identifier=repository_blueprint.identifier,
            properties={
                fix_pull_requests_count: {
                    targetBlueprintIdentifier: pull_request_blueprint.identifier,
                    title: Pull Requests Per Day,
                    icon: Terraform,
                    description: Pull Requests Per Day,
                    method: {
                        averageEntities: {
                            averageOf: month,
                            measureTimeBy: $createdAt,
                        },
                    },
                    query: json.dumps({
                        combinator: and,
                        rules: [{
                            property: $title,
                            operator: ContainsAny,
                            value: [
                                fix,
                                fixed,
                                fixing,
                                Fix,
                            ],
                        }],
                    }),
                },
            })
        ```

        Create multiple aggregation properties in one resource:

        ```python
        import pulumi
        import pulumi_port as port

        repository_blueprint = port.index.Port_blueprint("repositoryBlueprint",
            title=Repository Blueprint,
            icon=Terraform,
            identifier=repository,
            description=)
        pull_request_blueprint = port.index.Port_blueprint("pullRequestBlueprint",
            title=Pull Request Blueprint,
            icon=Terraform,
            identifier=pull_request,
            description=,
            properties={
                stringProps: {
                    status: {
                        title: Status,
                    },
                },
            },
            relations={
                repository: {
                    title: Repository,
                    target: repository_blueprint.identifier,
                },
            })
        repository_aggregation_properties = port.index.Port_aggregation_properties("repositoryAggregationProperties",
            blueprint_identifier=repository_blueprint.identifier,
            properties={
                pull_requests_per_day: {
                    targetBlueprintIdentifier: pull_request_blueprint.identifier,
                    title: Pull Requests Per Day,
                    icon: Terraform,
                    description: Pull Requests Per Day,
                    method: {
                        averageEntities: {
                            averageOf: day,
                            measureTimeBy: $createdAt,
                        },
                    },
                },
                overall_pull_requests_count: {
                    targetBlueprintIdentifier: pull_request_blueprint.identifier,
                    title: Overall Pull Requests Count,
                    icon: Terraform,
                    description: Overall Pull Requests Count,
                    method: {
                        countEntities: True,
                    },
                },
            })
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] blueprint_identifier: The identifier of the blueprint the aggregation property will be added to
        :param pulumi.Input[Mapping[str, pulumi.Input[Union['AggregationPropertiesPropertiesArgs', 'AggregationPropertiesPropertiesArgsDict']]]] properties: The aggregation property of the blueprint
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: AggregationPropertiesArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        This resource allows you to manage aggregation properties of a blueprint.

        See the [Port documentation](https://docs.getport.io/build-your-software-catalog/customize-integrations/configure-data-model/setup-blueprint/properties/aggregation-property/) for more information about aggregation properties.

        Supported Methods:

        - count_entities - Count the entities of the target blueprint
        - average_entities - Average the entities of the target blueprint by time periods
        - average_by_property - Calculate the average by property value of the target entities
        - aggregate_by_property - Calculate the aggregate by property value of the target entities, such as sum, min, max, median

        ## Example Usage

        Create a parent blueprint with a child blueprint and an aggregation property to count the parent kids:

        ```python
        import pulumi
        import pulumi_port as port

        parent_blueprint = port.index.Port_blueprint("parentBlueprint",
            title=Parent Blueprint,
            icon=Terraform,
            identifier=parent,
            description=,
            properties={
                numberProps: {
                    age: {
                        title: Age,
                    },
                },
            })
        child_blueprint = port.index.Port_blueprint("childBlueprint",
            title=Child Blueprint,
            icon=Terraform,
            identifier=child,
            description=,
            properties={
                numberProps: {
                    age: {
                        title: Age,
                    },
                },
            },
            relations={
                parent: {
                    title: Parent,
                    target: parent_blueprint.identifier,
                },
            })
        parent_aggregation_properties = port.index.Port_aggregation_properties("parentAggregationProperties",
            blueprint_identifier=parent_blueprint.identifier,
            properties={
                count_kids: {
                    targetBlueprintIdentifier: child_blueprint.identifier,
                    title: Count Kids,
                    icon: Terraform,
                    description: Count Kids,
                    method: {
                        countEntities: True,
                    },
                },
            })
        ```

        Create a parent blueprint with a child blueprint and an aggregation property to calculate the average avg of the parent kids age:

        ```python
        import pulumi
        import pulumi_port as port

        parent_blueprint = port.index.Port_blueprint("parentBlueprint",
            title=Parent Blueprint,
            icon=Terraform,
            identifier=parent,
            description=,
            properties={
                numberProps: {
                    age: {
                        title: Age,
                    },
                },
            })
        child_blueprint = port.index.Port_blueprint("childBlueprint",
            title=Child Blueprint,
            icon=Terraform,
            identifier=child,
            description=,
            properties={
                numberProps: {
                    age: {
                        title: Age,
                    },
                },
            },
            relations={
                parent: {
                    title: Parent,
                    target: parent_blueprint.identifier,
                },
            })
        parent_aggregation_properties = port.index.Port_aggregation_properties("parentAggregationProperties",
            blueprint_identifier=parent_blueprint.identifier,
            properties={
                averageKidsAge: {
                    targetBlueprintIdentifier: child_blueprint.identifier,
                    title: Average Kids Age,
                    icon: Terraform,
                    description: Average Kids Age,
                    method: {
                        averageByProperty: {
                            averageOf: total,
                            measureTimeBy: $createdAt,
                            property: age,
                        },
                    },
                },
            })
        ```

        Create a repository blueprint and a pull request blueprint and an aggregation property to calculate the average of pull requests created per day:

        ```python
        import pulumi
        import pulumi_port as port

        repository_blueprint = port.index.Port_blueprint("repositoryBlueprint",
            title=Repository Blueprint,
            icon=Terraform,
            identifier=repository,
            description=)
        pull_request_blueprint = port.index.Port_blueprint("pullRequestBlueprint",
            title=Pull Request Blueprint,
            icon=Terraform,
            identifier=pull_request,
            description=,
            properties={
                stringProps: {
                    status: {
                        title: Status,
                    },
                },
            },
            relations={
                repository: {
                    title: Repository,
                    target: repository_blueprint.identifier,
                },
            })
        repository_aggregation_properties = port.index.Port_aggregation_properties("repositoryAggregationProperties",
            blueprint_identifier=repository_blueprint.identifier,
            properties={
                pull_requests_per_day: {
                    targetBlueprintIdentifier: pull_request_blueprint.identifier,
                    title: Pull Requests Per Day,
                    icon: Terraform,
                    description: Pull Requests Per Day,
                    method: {
                        averageEntities: {
                            averageOf: day,
                            measureTimeBy: $createdAt,
                        },
                    },
                },
            })
        ```

        Create a repository blueprint and a pull request blueprint and an aggregation property to calculate the average of fix pull request per month:

        To do that we will add a query to the aggregation property to filter only pull requests with fixed title:

        ```python
        import pulumi
        import json
        import pulumi_port as port

        repository_blueprint = port.index.Port_blueprint("repositoryBlueprint",
            title=Repository Blueprint,
            icon=Terraform,
            identifier=repository,
            description=)
        pull_request_blueprint = port.index.Port_blueprint("pullRequestBlueprint",
            title=Pull Request Blueprint,
            icon=Terraform,
            identifier=pull_request,
            description=,
            properties={
                stringProps: {
                    status: {
                        title: Status,
                    },
                },
            },
            relations={
                repository: {
                    title: Repository,
                    target: repository_blueprint.identifier,
                },
            })
        repository_aggregation_properties = port.index.Port_aggregation_properties("repositoryAggregationProperties",
            blueprint_identifier=repository_blueprint.identifier,
            properties={
                fix_pull_requests_count: {
                    targetBlueprintIdentifier: pull_request_blueprint.identifier,
                    title: Pull Requests Per Day,
                    icon: Terraform,
                    description: Pull Requests Per Day,
                    method: {
                        averageEntities: {
                            averageOf: month,
                            measureTimeBy: $createdAt,
                        },
                    },
                    query: json.dumps({
                        combinator: and,
                        rules: [{
                            property: $title,
                            operator: ContainsAny,
                            value: [
                                fix,
                                fixed,
                                fixing,
                                Fix,
                            ],
                        }],
                    }),
                },
            })
        ```

        Create multiple aggregation properties in one resource:

        ```python
        import pulumi
        import pulumi_port as port

        repository_blueprint = port.index.Port_blueprint("repositoryBlueprint",
            title=Repository Blueprint,
            icon=Terraform,
            identifier=repository,
            description=)
        pull_request_blueprint = port.index.Port_blueprint("pullRequestBlueprint",
            title=Pull Request Blueprint,
            icon=Terraform,
            identifier=pull_request,
            description=,
            properties={
                stringProps: {
                    status: {
                        title: Status,
                    },
                },
            },
            relations={
                repository: {
                    title: Repository,
                    target: repository_blueprint.identifier,
                },
            })
        repository_aggregation_properties = port.index.Port_aggregation_properties("repositoryAggregationProperties",
            blueprint_identifier=repository_blueprint.identifier,
            properties={
                pull_requests_per_day: {
                    targetBlueprintIdentifier: pull_request_blueprint.identifier,
                    title: Pull Requests Per Day,
                    icon: Terraform,
                    description: Pull Requests Per Day,
                    method: {
                        averageEntities: {
                            averageOf: day,
                            measureTimeBy: $createdAt,
                        },
                    },
                },
                overall_pull_requests_count: {
                    targetBlueprintIdentifier: pull_request_blueprint.identifier,
                    title: Overall Pull Requests Count,
                    icon: Terraform,
                    description: Overall Pull Requests Count,
                    method: {
                        countEntities: True,
                    },
                },
            })
        ```

        :param str resource_name: The name of the resource.
        :param AggregationPropertiesArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(AggregationPropertiesArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 blueprint_identifier: Optional[pulumi.Input[str]] = None,
                 properties: Optional[pulumi.Input[Mapping[str, pulumi.Input[Union['AggregationPropertiesPropertiesArgs', 'AggregationPropertiesPropertiesArgsDict']]]]] = None,
                 __props__=None):
        opts = pulumi.ResourceOptions.merge(_utilities.get_resource_opts_defaults(), opts)
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = AggregationPropertiesArgs.__new__(AggregationPropertiesArgs)

            if blueprint_identifier is None and not opts.urn:
                raise TypeError("Missing required property 'blueprint_identifier'")
            __props__.__dict__["blueprint_identifier"] = blueprint_identifier
            if properties is None and not opts.urn:
                raise TypeError("Missing required property 'properties'")
            __props__.__dict__["properties"] = properties
        super(AggregationProperties, __self__).__init__(
            'port:index/aggregationProperties:AggregationProperties',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            blueprint_identifier: Optional[pulumi.Input[str]] = None,
            properties: Optional[pulumi.Input[Mapping[str, pulumi.Input[Union['AggregationPropertiesPropertiesArgs', 'AggregationPropertiesPropertiesArgsDict']]]]] = None) -> 'AggregationProperties':
        """
        Get an existing AggregationProperties resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] blueprint_identifier: The identifier of the blueprint the aggregation property will be added to
        :param pulumi.Input[Mapping[str, pulumi.Input[Union['AggregationPropertiesPropertiesArgs', 'AggregationPropertiesPropertiesArgsDict']]]] properties: The aggregation property of the blueprint
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _AggregationPropertiesState.__new__(_AggregationPropertiesState)

        __props__.__dict__["blueprint_identifier"] = blueprint_identifier
        __props__.__dict__["properties"] = properties
        return AggregationProperties(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="blueprintIdentifier")
    def blueprint_identifier(self) -> pulumi.Output[str]:
        """
        The identifier of the blueprint the aggregation property will be added to
        """
        return pulumi.get(self, "blueprint_identifier")

    @property
    @pulumi.getter
    def properties(self) -> pulumi.Output[Mapping[str, 'outputs.AggregationPropertiesProperties']]:
        """
        The aggregation property of the blueprint
        """
        return pulumi.get(self, "properties")

