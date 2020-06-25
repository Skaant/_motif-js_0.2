# motifjs
Generative pattern framework for Javascript

## What is a pattern ?

`/** [Pattern] definition of : Pattern (pattern) */`

```js
/**
 * 1. Retrieve pattern's definition
 * 2. Retrieve other patterns from definition (dependencies)
 * 3. Retrieve these patterns' definition and dependencies
 * 4. Repeat recursively until every unique dependency is covered
 * 
 * The list of a all pattern's dependencies is named `core`.
 * 
 * This very process should help us to focus on sharpening definition,
 *  thighten dependencies count
 *  and re-use the most abstract patterns.
 */
```

### Pattern

A [pattern](../../wiki/pattern) describes a repetition of { [properties](../../wiki/properties) and [methods](wiki/methods) } shared by a set of individuals : its [instances](../../wiki/instance).

### Instance

Instances are framework representations of patterns' occurences "concrete" manifestation, which can actually be files, folders, functions, parameters (etc.) as well as various combinations of all of these.

They serve as operable interfaces for the individual "entities" the pattern describes.

An instance is bound to a specific pattern :
* It is created by one of the pattern's [factories](../../wiki/factory),
* It must keep meeting the pattern instances' [specifications](../../wiki/specification),
* **It always hold a [reference](../../wiki/reference) to the pattern from which it is an instance**.
## What does pattern ?

`/** List of processors ? */`

## How to use patterns ?

`/** Tutorial ??? */`

## Table of patterns

*Generated the 2020-6-24 8:57:06 AM.*

* [`assert` | Assertion pattern](#assert--assertion-pattern)
* [`common` | Common pattern](#common--common-pattern)
* [`explorer` | Explorer pattern](#explorer--explorer-pattern)
* [`file` | File pattern](#file--file-pattern)
* [`get` | Getter pattern](#get--getter-pattern)
* [`instance` | Instance pattern](#instance--instance-pattern)
* [`motif` | Pattern pattern](#motif--pattern-pattern)
* [`new` | Constructor pattern](#new--constructor-pattern)
* [`spec` | Specification pattern](#spec--specification-pattern)


### `assert` | Assertion pattern



#### Instances

*No instances found*




### `common` | Common pattern

A ressource shared between multiple consumers.

#### Instances

*No instances found*




### `explorer` | Explorer pattern

Creates an user interface

#### Instances

*No instances found*




### `file` | File pattern



#### Instances

*No instances found*




### `get` | Getter pattern

Accesser of one (by its identifier) or multiple instances.

#### Instances

*No instances found*




### `instance` | Instance pattern


Instances are manifestations of a pattern,
an individual matching the pattern specification.

They serves as "logicial" representation of either :
* Folders,
* Files,
* Functions,
* Configurations,
* Any composition of those.


#### Instances

*No instances found*




### `motif` | Pattern pattern

A [pattern](../../wiki/pattern) describes a
repetition of { [properties](../../wiki/properties)
and [methods](wiki/methods) } shared by a set of
individuals : its [instances](../../wiki/instance).

#### Instances

* assert : `/_motifs/assert/assert.motif.js`
* common : `/_motifs/common/common.motif.js`
* explorer : `/_motifs/explorer/explorer.motif.js`
* file : `/_motifs/file/file.motif.js`
* get : `/_motifs/get/get.motif.js`
* instance : `/_motifs/instance/instance.motif.js`
* motif : `/_motifs/motif/motif.motif.js`
* new : `/_motifs/new/new.motif.js`
* spec : `/_motifs/spec/spec.motif.js`




### `new` | Constructor pattern


Example syntax :

`new(Motif, params) => instance`


#### Instances

*No instances found*




### `spec` | Specification pattern



#### Instances

*No instances found*


## Roadmap

For the first release of `motifjs` , expected features are :

1. Create an instance of a pattern,
2. Test instances of a pattern,
3. Document instances of a pattern.

The subject of my research is my appropriation of both **pattern** and **instance** concepts.

On another angle, I aim to **state the differences between and key features** of :

* The `motif.motif.js` file,
* Any `${ motifId }.motif.js` file,
* Any `${ instanceId }.${ motifId }.js` file.

## Bibliography

* [1] [D. Szafron, J. Anvik, K. Tan and 3 others. *Generative design patterns. Conference Paper, February 2002.*](https://www.researchgate.net/publication/3981737_Generative_design_patterns)
* [2] [E. Gamma, R. Helm, R. Johnson, and J. Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley, 1994.*](https://en.wikipedia.org/wiki/Design_Patterns)
