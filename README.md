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

An instance is bound to a specific pattern :
* It is created by one of the pattern's [factories](../../wiki/factory),
* It must keep meeting the pattern instances' [specifications](../../wiki/specification),
* **It always hold a [reference](../../wiki/reference) to the pattern from which it is an instance**.

Instances are framework representations of patterns' occurences "concrete" manifestation, which can actually be files, folders, functions, parameters (etc.) as well as various combinations of all of these.

They serve as operable interfaces for the individual "entities" the pattern describes.

## What does pattern ?

`/** List of processors ? */`

## How to use patterns ?

`/** Tutorial */`

## Table of patterns

`/** List of pattern² instances */`

## Bibliography

* [1] [D. Szafron, J. Anvik, K. Tan and 3 others. *Generative design patterns. Conference Paper, February 2002.*](https://www.researchgate.net/publication/3981737_Generative_design_patterns)
* [2] [E. Gamma, R. Helm, R. Johnson, and J. Vlissides. *Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley, 1994.*](https://en.wikipedia.org/wiki/Design_Patterns)
