---
id: "knex.knex-2"
title: "Interface: Knex<TRecord, TResult>"
sidebar_label: "Knex"
custom_edit_url: null
hide_title: true
---

# Interface: Knex<TRecord, TResult\>

[knex](../modules/knex.md).Knex

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`TRecord` | *object* | *any* |
`TResult` | - | *unknown*[] |

## Hierarchy

* [*QueryInterface*](knex.knex-1.queryinterface.md)<TRecord, TResult\>

* *EventEmitter*

  ↳ **Knex**

## Callable

▸ **Knex**<TTable\>(`tableName`: TTable, `options?`: PgTableOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<[*TableType*](../modules/knex.knex-1.md#tabletype)<TTable\>, DeferredKeySelection<[*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<[*TableType*](../modules/knex.knex-1.md#tabletype)<TTable\>, *base*\>, never, *false*, {}, *false*, {}, never\>[]\>

#### Type parameters:

Name | Type |
:------ | :------ |
`TTable` | *never* |

#### Parameters:

Name | Type |
:------ | :------ |
`tableName` | TTable |
`options?` | PgTableOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<[*TableType*](../modules/knex.knex-1.md#tabletype)<TTable\>, DeferredKeySelection<[*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<[*TableType*](../modules/knex.knex-1.md#tabletype)<TTable\>, *base*\>, never, *false*, {}, *false*, {}, never\>[]\>

Defined in: node_modules/knex/types/index.d.ts:332

▸ **Knex**<TRecord2, TResult2\>(`tableName?`: [*TableDescriptor*](../modules/knex.knex-1.md#tabledescriptor) \| [*AliasDict*](knex.knex-1.aliasdict.md), `options?`: PgTableOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord2, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TRecord2` | TRecord |
`TResult2` | *DeferredKeySelection*<TRecord2, never, *false*, {}, *false*, {}, never\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`tableName?` | [*TableDescriptor*](../modules/knex.knex-1.md#tabledescriptor) \| [*AliasDict*](knex.knex-1.aliasdict.md) |
`options?` | PgTableOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord2, TResult2\>

Defined in: node_modules/knex/types/index.d.ts:336

## Constructors

### constructor

• **constructor**: *object*

Inherited from: void

## Properties

### RefMemberTag

• **RefMemberTag**: *typeof* [*RefMemberTag*](../modules/knex.knex-1.md#refmembertag)

___

### VERSION

• **VERSION**: *string*

Defined in: node_modules/knex/types/index.d.ts:341

___

### \_\_knex\_\_

• **\_\_knex\_\_**: *string*

Defined in: node_modules/knex/types/index.d.ts:342

___

### andHaving

• **andHaving**: [*Having*](knex.knex-1.having.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[andHaving](knex.knex-1.queryinterface.md#andhaving)

Defined in: node_modules/knex/types/index.d.ts:544

___

### andWhere

• **andWhere**: [*Where*](knex.knex-1.where.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[andWhere](knex.knex-1.queryinterface.md#andwhere)

Defined in: node_modules/knex/types/index.d.ts:498

___

### andWhereBetween

• **andWhereBetween**: [*WhereBetween*](knex.knex-1.wherebetween.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[andWhereBetween](knex.knex-1.queryinterface.md#andwherebetween)

Defined in: node_modules/knex/types/index.d.ts:522

___

### andWhereNot

• **andWhereNot**: [*Where*](knex.knex-1.where.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[andWhereNot](knex.knex-1.queryinterface.md#andwherenot)

Defined in: node_modules/knex/types/index.d.ts:501

___

### andWhereNotBetween

• **andWhereNotBetween**: [*WhereBetween*](knex.knex-1.wherebetween.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[andWhereNotBetween](knex.knex-1.queryinterface.md#andwherenotbetween)

Defined in: node_modules/knex/types/index.d.ts:525

___

### andWhereRaw

• **andWhereRaw**: [*WhereRaw*](knex.knex-1.whereraw.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[andWhereRaw](knex.knex-1.queryinterface.md#andwhereraw)

Defined in: node_modules/knex/types/index.d.ts:505

___

### as

• **as**: [*As*](knex.knex-1.as.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[as](knex.knex-1.queryinterface.md#as)

Defined in: node_modules/knex/types/index.d.ts:467

___

### avg

• **avg**: [*TypePreservingAggregation*](knex.knex-1.typepreservingaggregation.md)<TRecord, TResult, any\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[avg](knex.knex-1.queryinterface.md#avg)

Defined in: node_modules/knex/types/index.d.ts:587

___

### avgDistinct

• **avgDistinct**: [*TypePreservingAggregation*](knex.knex-1.typepreservingaggregation.md)<TRecord, TResult, any\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[avgDistinct](knex.knex-1.queryinterface.md#avgdistinct)

Defined in: node_modules/knex/types/index.d.ts:588

___

### client

• **client**: *any*

Defined in: node_modules/knex/types/index.d.ts:375

___

### column

• **column**: [*Select*](knex.knex-1.select.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[column](knex.knex-1.queryinterface.md#column)

Defined in: node_modules/knex/types/index.d.ts:469

___

### columns

• **columns**: [*Select*](knex.knex-1.select.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[columns](knex.knex-1.queryinterface.md#columns)

Defined in: node_modules/knex/types/index.d.ts:468

___

### count

• **count**: [*AsymmetricAggregation*](knex.knex-1.asymmetricaggregation.md)<TRecord, TResult, string \| number\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[count](knex.knex-1.queryinterface.md#count)

Defined in: node_modules/knex/types/index.d.ts:581

___

### countDistinct

• **countDistinct**: [*AsymmetricAggregation*](knex.knex-1.asymmetricaggregation.md)<TRecord, TResult, string \| number\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[countDistinct](knex.knex-1.queryinterface.md#countdistinct)

Defined in: node_modules/knex/types/index.d.ts:582

___

### crossJoin

• **crossJoin**: [*Join*](knex.knex-1.join.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[crossJoin](knex.knex-1.queryinterface.md#crossjoin)

Defined in: node_modules/knex/types/index.d.ts:487

___

### distinct

• **distinct**: [*Distinct*](knex.knex-1.distinct.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[distinct](knex.knex-1.queryinterface.md#distinct)

Defined in: node_modules/knex/types/index.d.ts:474

___

### distinctOn

• **distinctOn**: [*DistinctOn*](knex.knex-1.distincton.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[distinctOn](knex.knex-1.queryinterface.md#distincton)

Defined in: node_modules/knex/types/index.d.ts:475

___

### first

• **first**: [*Select*](knex.knex-1.select.md)<TRecord, AddUnionMember<UnwrapArrayMember<TResult\>, undefined\>\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[first](knex.knex-1.queryinterface.md#first)

Defined in: node_modules/knex/types/index.d.ts:609

___

### fn

• **fn**: [*FunctionHelper*](knex.knex-1.functionhelper.md)

Defined in: node_modules/knex/types/index.d.ts:378

___

### from

• **from**: [*Table*](knex.knex-1.table.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[from](knex.knex-1.queryinterface.md#from)

Defined in: node_modules/knex/types/index.d.ts:471

___

### fullOuterJoin

• **fullOuterJoin**: [*Join*](knex.knex-1.join.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[fullOuterJoin](knex.knex-1.queryinterface.md#fullouterjoin)

Defined in: node_modules/knex/types/index.d.ts:486

___

### groupBy

• **groupBy**: [*GroupBy*](knex.knex-1.groupby.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[groupBy](knex.knex-1.queryinterface.md#groupby)

Defined in: node_modules/knex/types/index.d.ts:528

___

### groupByRaw

• **groupByRaw**: [*RawQueryBuilder*](knex.knex-1.rawquerybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[groupByRaw](knex.knex-1.queryinterface.md#groupbyraw)

Defined in: node_modules/knex/types/index.d.ts:529

___

### having

• **having**: [*Having*](knex.knex-1.having.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[having](knex.knex-1.queryinterface.md#having)

Defined in: node_modules/knex/types/index.d.ts:543

___

### havingBetween

• **havingBetween**: [*HavingRange*](knex.knex-1.havingrange.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[havingBetween](knex.knex-1.queryinterface.md#havingbetween)

Defined in: node_modules/knex/types/index.d.ts:552

___

### havingIn

• **havingIn**: [*HavingRange*](knex.knex-1.havingrange.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[havingIn](knex.knex-1.queryinterface.md#havingin)

Defined in: node_modules/knex/types/index.d.ts:548

___

### havingNotBetween

• **havingNotBetween**: [*HavingRange*](knex.knex-1.havingrange.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[havingNotBetween](knex.knex-1.queryinterface.md#havingnotbetween)

Defined in: node_modules/knex/types/index.d.ts:550

___

### havingRaw

• **havingRaw**: [*RawQueryBuilder*](knex.knex-1.rawquerybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[havingRaw](knex.knex-1.queryinterface.md#havingraw)

Defined in: node_modules/knex/types/index.d.ts:545

___

### havingWrapped

• **havingWrapped**: [*WhereWrapped*](knex.knex-1.wherewrapped.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[havingWrapped](knex.knex-1.queryinterface.md#havingwrapped)

Defined in: node_modules/knex/types/index.d.ts:507

___

### hintComment

• **hintComment**: [*HintComment*](knex.knex-1.hintcomment.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[hintComment](knex.knex-1.queryinterface.md#hintcomment)

Defined in: node_modules/knex/types/index.d.ts:470

___

### innerJoin

• **innerJoin**: [*Join*](knex.knex-1.join.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[innerJoin](knex.knex-1.queryinterface.md#innerjoin)

Defined in: node_modules/knex/types/index.d.ts:480

___

### intersect

• **intersect**: [*Intersect*](knex.knex-1.intersect.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[intersect](knex.knex-1.queryinterface.md#intersect)

Defined in: node_modules/knex/types/index.d.ts:536

___

### into

• **into**: [*Table*](knex.knex-1.table.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[into](knex.knex-1.queryinterface.md#into)

Defined in: node_modules/knex/types/index.d.ts:472

___

### join

• **join**: [*Join*](knex.knex-1.join.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[join](knex.knex-1.queryinterface.md#join)

Defined in: node_modules/knex/types/index.d.ts:478

___

### joinRaw

• **joinRaw**: [*JoinRaw*](knex.knex-1.joinraw.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[joinRaw](knex.knex-1.queryinterface.md#joinraw)

Defined in: node_modules/knex/types/index.d.ts:479

___

### leftJoin

• **leftJoin**: [*Join*](knex.knex-1.join.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[leftJoin](knex.knex-1.queryinterface.md#leftjoin)

Defined in: node_modules/knex/types/index.d.ts:481

___

### leftOuterJoin

• **leftOuterJoin**: [*Join*](knex.knex-1.join.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[leftOuterJoin](knex.knex-1.queryinterface.md#leftouterjoin)

Defined in: node_modules/knex/types/index.d.ts:482

___

### max

• **max**: [*TypePreservingAggregation*](knex.knex-1.typepreservingaggregation.md)<TRecord, TResult, any\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[max](knex.knex-1.queryinterface.md#max)

Defined in: node_modules/knex/types/index.d.ts:584

___

### migrate

• **migrate**: [*Migrator*](knex.knex-1.migrator.md)

Defined in: node_modules/knex/types/index.d.ts:376

___

### min

• **min**: [*TypePreservingAggregation*](knex.knex-1.typepreservingaggregation.md)<TRecord, TResult, any\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[min](knex.knex-1.queryinterface.md#min)

Defined in: node_modules/knex/types/index.d.ts:583

___

### orHaving

• **orHaving**: [*Having*](knex.knex-1.having.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orHaving](knex.knex-1.queryinterface.md#orhaving)

Defined in: node_modules/knex/types/index.d.ts:546

___

### orHavingBetween

• **orHavingBetween**: [*HavingRange*](knex.knex-1.havingrange.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orHavingBetween](knex.knex-1.queryinterface.md#orhavingbetween)

Defined in: node_modules/knex/types/index.d.ts:551

___

### orHavingNotBetween

• **orHavingNotBetween**: [*HavingRange*](knex.knex-1.havingrange.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orHavingNotBetween](knex.knex-1.queryinterface.md#orhavingnotbetween)

Defined in: node_modules/knex/types/index.d.ts:549

___

### orHavingRaw

• **orHavingRaw**: [*RawQueryBuilder*](knex.knex-1.rawquerybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orHavingRaw](knex.knex-1.queryinterface.md#orhavingraw)

Defined in: node_modules/knex/types/index.d.ts:547

___

### orWhere

• **orWhere**: [*Where*](knex.knex-1.where.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orWhere](knex.knex-1.queryinterface.md#orwhere)

Defined in: node_modules/knex/types/index.d.ts:499

___

### orWhereBetween

• **orWhereBetween**: [*WhereBetween*](knex.knex-1.wherebetween.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orWhereBetween](knex.knex-1.queryinterface.md#orwherebetween)

Defined in: node_modules/knex/types/index.d.ts:521

___

### orWhereExists

• **orWhereExists**: [*WhereExists*](knex.knex-1.whereexists.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orWhereExists](knex.knex-1.queryinterface.md#orwhereexists)

Defined in: node_modules/knex/types/index.d.ts:509

___

### orWhereIn

• **orWhereIn**: [*WhereIn*](knex.knex-1.wherein.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orWhereIn](knex.knex-1.queryinterface.md#orwherein)

Defined in: node_modules/knex/types/index.d.ts:513

___

### orWhereNot

• **orWhereNot**: [*Where*](knex.knex-1.where.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orWhereNot](knex.knex-1.queryinterface.md#orwherenot)

Defined in: node_modules/knex/types/index.d.ts:502

___

### orWhereNotBetween

• **orWhereNotBetween**: [*WhereBetween*](knex.knex-1.wherebetween.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orWhereNotBetween](knex.knex-1.queryinterface.md#orwherenotbetween)

Defined in: node_modules/knex/types/index.d.ts:524

___

### orWhereNotExists

• **orWhereNotExists**: [*WhereExists*](knex.knex-1.whereexists.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orWhereNotExists](knex.knex-1.queryinterface.md#orwherenotexists)

Defined in: node_modules/knex/types/index.d.ts:511

___

### orWhereNotIn

• **orWhereNotIn**: [*WhereIn*](knex.knex-1.wherein.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orWhereNotIn](knex.knex-1.queryinterface.md#orwherenotin)

Defined in: node_modules/knex/types/index.d.ts:515

___

### orWhereNotNull

• **orWhereNotNull**: [*WhereNull*](knex.knex-1.wherenull.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orWhereNotNull](knex.knex-1.queryinterface.md#orwherenotnull)

Defined in: node_modules/knex/types/index.d.ts:519

___

### orWhereNull

• **orWhereNull**: [*WhereNull*](knex.knex-1.wherenull.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orWhereNull](knex.knex-1.queryinterface.md#orwherenull)

Defined in: node_modules/knex/types/index.d.ts:517

___

### orWhereRaw

• **orWhereRaw**: [*WhereRaw*](knex.knex-1.whereraw.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orWhereRaw](knex.knex-1.queryinterface.md#orwhereraw)

Defined in: node_modules/knex/types/index.d.ts:504

___

### orderBy

• **orderBy**: [*OrderBy*](knex.knex-1.orderby.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orderBy](knex.knex-1.queryinterface.md#orderby)

Defined in: node_modules/knex/types/index.d.ts:532

___

### orderByRaw

• **orderByRaw**: [*RawQueryBuilder*](knex.knex-1.rawquerybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[orderByRaw](knex.knex-1.queryinterface.md#orderbyraw)

Defined in: node_modules/knex/types/index.d.ts:533

___

### outerJoin

• **outerJoin**: [*Join*](knex.knex-1.join.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[outerJoin](knex.knex-1.queryinterface.md#outerjoin)

Defined in: node_modules/knex/types/index.d.ts:485

___

### raw

• **raw**: [*RawBuilder*](knex.knex-1.rawbuilder.md)<TRecord, any\>

Defined in: node_modules/knex/types/index.d.ts:344

___

### ref

• **ref**: [*RefBuilder*](knex.knex-1.refbuilder.md)

Defined in: node_modules/knex/types/index.d.ts:379

___

### rightJoin

• **rightJoin**: [*Join*](knex.knex-1.join.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[rightJoin](knex.knex-1.queryinterface.md#rightjoin)

Defined in: node_modules/knex/types/index.d.ts:483

___

### rightOuterJoin

• **rightOuterJoin**: [*Join*](knex.knex-1.join.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[rightOuterJoin](knex.knex-1.queryinterface.md#rightouterjoin)

Defined in: node_modules/knex/types/index.d.ts:484

___

### schema

• **schema**: [*SchemaBuilder*](knex.knex-1.schemabuilder.md)

Defined in: node_modules/knex/types/index.d.ts:369

___

### seed

• **seed**: [*Seeder*](../classes/knex.knex-1.seeder.md)

Defined in: node_modules/knex/types/index.d.ts:377

___

### select

• **select**: [*Select*](knex.knex-1.select.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[select](knex.knex-1.queryinterface.md#select)

Defined in: node_modules/knex/types/index.d.ts:466

___

### sum

• **sum**: [*TypePreservingAggregation*](knex.knex-1.typepreservingaggregation.md)<TRecord, TResult, any\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[sum](knex.knex-1.queryinterface.md#sum)

Defined in: node_modules/knex/types/index.d.ts:585

___

### sumDistinct

• **sumDistinct**: [*TypePreservingAggregation*](knex.knex-1.typepreservingaggregation.md)<TRecord, TResult, any\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[sumDistinct](knex.knex-1.queryinterface.md#sumdistinct)

Defined in: node_modules/knex/types/index.d.ts:586

___

### table

• **table**: [*Table*](knex.knex-1.table.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[table](knex.knex-1.queryinterface.md#table)

Defined in: node_modules/knex/types/index.d.ts:473

___

### union

• **union**: [*Union*](knex.knex-1.union.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[union](knex.knex-1.queryinterface.md#union)

Defined in: node_modules/knex/types/index.d.ts:539

___

### unionAll

• **unionAll**: [*Union*](knex.knex-1.union.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[unionAll](knex.knex-1.queryinterface.md#unionall)

Defined in: node_modules/knex/types/index.d.ts:540

___

### userParams

• **userParams**: *Record*<string, any\>

Defined in: node_modules/knex/types/index.d.ts:380

___

### where

• **where**: [*Where*](knex.knex-1.where.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[where](knex.knex-1.queryinterface.md#where)

Defined in: node_modules/knex/types/index.d.ts:497

___

### whereBetween

• **whereBetween**: [*WhereBetween*](knex.knex-1.wherebetween.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[whereBetween](knex.knex-1.queryinterface.md#wherebetween)

Defined in: node_modules/knex/types/index.d.ts:520

___

### whereExists

• **whereExists**: [*WhereExists*](knex.knex-1.whereexists.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[whereExists](knex.knex-1.queryinterface.md#whereexists)

Defined in: node_modules/knex/types/index.d.ts:508

___

### whereIn

• **whereIn**: [*WhereIn*](knex.knex-1.wherein.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[whereIn](knex.knex-1.queryinterface.md#wherein)

Defined in: node_modules/knex/types/index.d.ts:512

___

### whereNot

• **whereNot**: [*Where*](knex.knex-1.where.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[whereNot](knex.knex-1.queryinterface.md#wherenot)

Defined in: node_modules/knex/types/index.d.ts:500

___

### whereNotBetween

• **whereNotBetween**: [*WhereBetween*](knex.knex-1.wherebetween.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[whereNotBetween](knex.knex-1.queryinterface.md#wherenotbetween)

Defined in: node_modules/knex/types/index.d.ts:523

___

### whereNotExists

• **whereNotExists**: [*WhereExists*](knex.knex-1.whereexists.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[whereNotExists](knex.knex-1.queryinterface.md#wherenotexists)

Defined in: node_modules/knex/types/index.d.ts:510

___

### whereNotIn

• **whereNotIn**: [*WhereIn*](knex.knex-1.wherein.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[whereNotIn](knex.knex-1.queryinterface.md#wherenotin)

Defined in: node_modules/knex/types/index.d.ts:514

___

### whereNotNull

• **whereNotNull**: [*WhereNull*](knex.knex-1.wherenull.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[whereNotNull](knex.knex-1.queryinterface.md#wherenotnull)

Defined in: node_modules/knex/types/index.d.ts:518

___

### whereNull

• **whereNull**: [*WhereNull*](knex.knex-1.wherenull.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[whereNull](knex.knex-1.queryinterface.md#wherenull)

Defined in: node_modules/knex/types/index.d.ts:516

___

### whereRaw

• **whereRaw**: [*WhereRaw*](knex.knex-1.whereraw.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[whereRaw](knex.knex-1.queryinterface.md#whereraw)

Defined in: node_modules/knex/types/index.d.ts:503

___

### whereWrapped

• **whereWrapped**: [*WhereWrapped*](knex.knex-1.wherewrapped.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[whereWrapped](knex.knex-1.queryinterface.md#wherewrapped)

Defined in: node_modules/knex/types/index.d.ts:506

___

### with

• **with**: [*With*](knex.knex-1.with.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[with](knex.knex-1.queryinterface.md#with)

Defined in: node_modules/knex/types/index.d.ts:490

___

### withRaw

• **withRaw**: [*WithRaw*](knex.knex-1.withraw.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[withRaw](knex.knex-1.queryinterface.md#withraw)

Defined in: node_modules/knex/types/index.d.ts:492

___

### withRecursive

• **withRecursive**: [*With*](knex.knex-1.with.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[withRecursive](knex.knex-1.queryinterface.md#withrecursive)

Defined in: node_modules/knex/types/index.d.ts:491

___

### withSchema

• **withSchema**: [*WithSchema*](knex.knex-1.withschema.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[withSchema](knex.knex-1.queryinterface.md#withschema)

Defined in: node_modules/knex/types/index.d.ts:493

___

### withWrapped

• **withWrapped**: [*WithWrapped*](knex.knex-1.withwrapped.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md).[withWrapped](knex.knex-1.queryinterface.md#withwrapped)

Defined in: node_modules/knex/types/index.d.ts:494

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:62

___

### batchInsert

▸ **batchInsert**<TRecord2, TResult2\>(`tableName`: [*TableDescriptor*](../modules/knex.knex-1.md#tabledescriptor), `data`: TRecord2 *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord2, *insert*\>[] : readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord2\>[], `chunkSize?`: *number*): [*BatchInsertBuilder*](knex.knex-1.batchinsertbuilder.md)<TRecord2, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TRecord2` | TRecord |
`TResult2` | *number*[] |

#### Parameters:

Name | Type |
:------ | :------ |
`tableName` | [*TableDescriptor*](../modules/knex.knex-1.md#tabledescriptor) |
`data` | TRecord2 *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord2, *insert*\>[] : readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord2\>[] |
`chunkSize?` | *number* |

**Returns:** [*BatchInsertBuilder*](knex.knex-1.batchinsertbuilder.md)<TRecord2, TResult2\>

Defined in: node_modules/knex/types/index.d.ts:361

___

### clear

▸ **clear**(`statement`: [*ClearStatements*](../modules/knex.knex-1.md#clearstatements)): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`statement` | [*ClearStatements*](../modules/knex.knex-1.md#clearstatements) |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:574

___

### clearCounters

▸ **clearCounters**(): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:573

___

### clearGroup

▸ **clearGroup**(): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:570

___

### clearHaving

▸ **clearHaving**(): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:572

___

### clearOrder

▸ **clearOrder**(): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:571

___

### clearSelect

▸ **clearSelect**(): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, *UnwrapArrayMember*<TResult\> *extends* *DeferredKeySelection*<TBase, TKeys, *true*, any, any, any, any\> ? *DeferredKeySelection*<TBase, never, *false*, {}, *false*, {}, never\>[] : TResult\>

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, *UnwrapArrayMember*<TResult\> *extends* *DeferredKeySelection*<TBase, TKeys, *true*, any, any, any, any\> ? *DeferredKeySelection*<TBase, never, *false*, {}, *false*, {}, never\>[] : TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:555

___

### clearWhere

▸ **clearWhere**(): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:569

___

### decrement

▸ **decrement**(`columnName`: keyof TRecord, `amount?`: *number*): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, number\>

#### Parameters:

Name | Type |
:------ | :------ |
`columnName` | keyof TRecord |
`amount?` | *number* |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, number\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:599

▸ **decrement**(`columnName`: *string*, `amount?`: *number*): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, number\>

#### Parameters:

Name | Type |
:------ | :------ |
`columnName` | *string* |
`amount?` | *number* |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, number\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:603

___

### del

▸ **del**(`returning`: ***, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, DeferredKeySelection<TRecord, never, *false*, {}, *false*, {}, never\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`returning` | *** |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, DeferredKeySelection<TRecord, never, *false*, {}, *false*, {}, never\>[]\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:833

▸ **del**<TKey, TResult2\>(`returning`: TKey, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *SetSingle*<AddKey<SetBase<UnwrapArrayMember<TResult\>, TRecord\>, TKey\>, *true*\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`returning` | TKey |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:837

▸ **del**<TKey, TResult2\>(`returning`: readonly TKey[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2[]\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *AddAliases*<AddKey<SetBase<UnwrapArrayMember<TResult\>, TRecord\>, TKey\>, {}\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`returning` | readonly TKey[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2[]\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:848

▸ **del**<TResult2\>(`returning`: *string* \| readonly *string*[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult2` | *Partial*<AnyOrUnknownToOther<TRecord, {}\>\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`returning` | *string* \| readonly *string*[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:859

▸ **del**<TResult2\>(): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult2` | *number* |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:863

___

### delete

▸ **delete**(`returning`: ***, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, DeferredKeySelection<TRecord, never, *false*, {}, *false*, {}, never\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`returning` | *** |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, DeferredKeySelection<TRecord, never, *false*, {}, *false*, {}, never\>[]\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:865

▸ **delete**<TKey, TResult2\>(`returning`: TKey, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *SetSingle*<AddKey<SetBase<UnwrapArrayMember<TResult\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\>\>, TKey\>, *true*\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`returning` | TKey |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:869

▸ **delete**<TKey, TResult2\>(`returning`: readonly TKey[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *AddAliases*<AddKey<SetBase<UnwrapArrayMember<TResult\>, TRecord\>, TKey\>, {}\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`returning` | readonly TKey[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:880

▸ **delete**<TResult2\>(`returning`: *string* \| readonly *string*[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult2` | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`returning` | *string* \| readonly *string*[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:891

▸ **delete**<TResult2\>(): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult2` | *number* |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:895

___

### destroy

▸ **destroy**(`callback`: Function): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | Function |

**Returns:** *void*

Defined in: node_modules/knex/types/index.d.ts:358

▸ **destroy**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: node_modules/knex/types/index.d.ts:359

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:72

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:77

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:69

___

### increment

▸ **increment**(`columnName`: keyof TRecord, `amount?`: *number*): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, number\>

#### Parameters:

Name | Type |
:------ | :------ |
`columnName` | keyof TRecord |
`amount?` | *number* |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, number\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:590

▸ **increment**(`columnName`: *string*, `amount?`: *number*): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, number\>

#### Parameters:

Name | Type |
:------ | :------ |
`columnName` | *string* |
`amount?` | *number* |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, number\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:594

___

### initialize

▸ **initialize**(`config?`: [*Config*](knex.knex-1.config.md)<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`config?` | [*Config*](knex.knex-1.config.md)<any\> |

**Returns:** *void*

Defined in: node_modules/knex/types/index.d.ts:357

___

### insert

▸ **insert**(`data`: TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[], `returning`: ***, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, DeferredKeySelection<TRecord, never, *false*, {}, *false*, {}, never\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`data` | TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[] |
`returning` | *** |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, DeferredKeySelection<TRecord, never, *false*, {}, *false*, {}, never\>[]\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:616

▸ **insert**<TKey, TResult2\>(`data`: TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[], `returning`: TKey, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *SetSingle*<AddKey<SetBase<UnwrapArrayMember<TResult\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\>\>, TKey\>, *true*\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`data` | TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[] |
`returning` | TKey |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:623

▸ **insert**<TKey, TResult2\>(`data`: TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[], `returning`: readonly TKey[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *AddAliases*<AddKey<SetBase<UnwrapArrayMember<TResult\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\>\>, TKey\>, {}\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`data` | TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[] |
`returning` | readonly TKey[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:637

▸ **insert**<TKey, TResult2\>(`data`: TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[], `returning`: TKey, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *SetSingle*<AddKey<SetBase<UnwrapArrayMember<TResult\>, TRecord\>, TKey\>, *true*\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`data` | TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[] |
`returning` | TKey |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:651

▸ **insert**<TKey, TResult2\>(`data`: TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[], `returning`: readonly TKey[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *SetSingle*<AddKey<SetBase<UnwrapArrayMember<TResult\>, TRecord\>, TKey\>, *true*\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`data` | TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[] |
`returning` | readonly TKey[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:665

▸ **insert**<TResult2\>(`data`: TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[]): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult2` | *number*[] |

#### Parameters:

Name | Type |
:------ | :------ |
`data` | TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\> \| readonly [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *insert*\>[] : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> \| readonly [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>[] |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:679

___

### limit

▸ **limit**(`limit`: *number*): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`limit` | *number* |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:578

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:73

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:70

___

### modify

▸ **modify**<TRecord2, TResult2\>(`callback`: [*QueryCallbackWithArgs*](../modules/knex.knex-1.md#querycallbackwithargs)<TRecord, any\>, ...`args`: *any*[]): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord2, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TRecord2` | *object* | *any* |
`TResult2` | *object* | *any* |

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | [*QueryCallbackWithArgs*](../modules/knex.knex-1.md#querycallbackwithargs)<TRecord, any\> |
`...args` | *any*[] |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord2, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:685

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:66

___

### offset

▸ **offset**(`offset`: *number*): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`offset` | *number* |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:577

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:63

___

### onConflict

▸ **onConflict**<TKey, TResult2\>(`column`: TKey): [*OnConflictQueryBuilder*](knex.knex-1.onconflictquerybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *SetSingle*<AddKey<SetBase<UnwrapArrayMember<TResult\>, TRecord\>, TKey\>, *true*\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`column` | TKey |

**Returns:** [*OnConflictQueryBuilder*](knex.knex-1.onconflictquerybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:813

▸ **onConflict**<TKey, TResult2\>(`columns`: readonly TKey[]): [*OnConflictQueryBuilder*](knex.knex-1.onconflictquerybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *SetSingle*<AddAliases<AddKey<SetBase<UnwrapArrayMember<TResult\>, TRecord\>, TKey\>, {}\>, *false*\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`columns` | readonly TKey[] |

**Returns:** [*OnConflictQueryBuilder*](knex.knex-1.onconflictquerybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:823

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:64

___

### pluck

▸ **pluck**<K\>(`column`: K): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TRecord[K][]\>

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`column` | K |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TRecord[K][]\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:611

▸ **pluck**<TResult2\>(`column`: *string*): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type |
:------ | :------ |
`TResult2` | *object* |

#### Parameters:

Name | Type |
:------ | :------ |
`column` | *string* |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:614

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:76

___

### queryBuilder

▸ **queryBuilder**<TRecord2, TResult2\>(): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord2, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TRecord2` | TRecord |
`TResult2` | TResult |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord2, TResult2\>

Defined in: node_modules/knex/types/index.d.ts:370

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:71

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`event?` | *string* \| *symbol* |

**Returns:** [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:65

___

### returning

▸ **returning**(`column`: ***, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, DeferredKeySelection<TRecord, never, *false*, {}, *false*, {}, never\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`column` | *** |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, DeferredKeySelection<TRecord, never, *false*, {}, *false*, {}, never\>[]\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:786

▸ **returning**<TKey, TResult2\>(`column`: TKey, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *SetSingle*<AddKey<SetBase<UnwrapArrayMember<TResult\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\>\>, TKey\>, *true*\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`column` | TKey |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:787

▸ **returning**<TKey, TResult2\>(`columns`: readonly TKey[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *SetSingle*<AddAliases<AddKey<SetBase<UnwrapArrayMember<TResult\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\>\>, TKey\>, {}\>, *false*\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`columns` | readonly TKey[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:798

▸ **returning**<TResult2\>(`column`: *string* \| readonly *string*[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult2` | *Partial*<AnyOrUnknownToOther<TRecord, {}\>\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`column` | *string* \| readonly *string*[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:808

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*Knex*](../modules/knex.md#knex)<TRecord, TResult\>

Inherited from: void

Defined in: node_modules/@types/node/events.d.ts:68

___

### transaction

▸ **transaction**(`transactionScope?`: *null*, `config?`: *any*): *Promise*<[*Transaction*](knex.knex-1.transaction.md)<any, any\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`transactionScope?` | *null* |
`config?` | *any* |

**Returns:** *Promise*<[*Transaction*](knex.knex-1.transaction.md)<any, any\>\>

Defined in: node_modules/knex/types/index.d.ts:349

▸ **transaction**<T\>(`transactionScope`: (`trx`: [*Transaction*](knex.knex-1.transaction.md)<any, any\>) => *void* \| *Promise*<T\>, `config?`: *any*): *Promise*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`transactionScope` | (`trx`: [*Transaction*](knex.knex-1.transaction.md)<any, any\>) => *void* \| *Promise*<T\> |
`config?` | *any* |

**Returns:** *Promise*<T\>

Defined in: node_modules/knex/types/index.d.ts:353

___

### transactionProvider

▸ **transactionProvider**(`config?`: *any*): *function*

#### Parameters:

Name | Type |
:------ | :------ |
`config?` | *any* |

**Returns:** () => *Promise*<[*Transaction*](knex.knex-1.transaction.md)<any, any\>\>

Defined in: node_modules/knex/types/index.d.ts:346

___

### truncate

▸ **truncate**(): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, void\>

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, void\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:897

___

### update

▸ **update**<K1, K2, TResult2\>(`columnName`: K1, `value`: [*DbColumn*](../modules/knex.knex-1.md#dbcolumn)<[*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\>[K1]\>, `returning`: K2, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`K1` | *string* | - |
`K2` | *string* | - |
`TResult2` | - | *SetSingle*<AddKey<SetBase<UnwrapArrayMember<TResult\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\>\>, K2\>, *true*\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`columnName` | K1 |
`value` | [*DbColumn*](../modules/knex.knex-1.md#dbcolumn)<[*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\>[K1]\> |
`returning` | K2 |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:689

▸ **update**<K1, K2, TResult2\>(`columnName`: K1, `value`: [*DbColumn*](../modules/knex.knex-1.md#dbcolumn)<[*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\>[K1]\>, `returning`: readonly K2[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`K1` | *string* | - |
`K2` | *string* | - |
`TResult2` | - | *AddAliases*<AddKey<SetBase<UnwrapArrayMember<TResult\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\>\>, K2\>, {}\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`columnName` | K1 |
`value` | [*DbColumn*](../modules/knex.knex-1.md#dbcolumn)<[*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\>[K1]\> |
`returning` | readonly K2[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:703

▸ **update**<K\>(`columnName`: K, `value`: [*DbColumn*](../modules/knex.knex-1.md#dbcolumn)<TRecord[K]\>): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, number\>

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`columnName` | K |
`value` | [*DbColumn*](../modules/knex.knex-1.md#dbcolumn)<TRecord[K]\> |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, number\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:717

▸ **update**<TResult2\>(`columnName`: *string*, `value`: [*Value*](../modules/knex.knex-1.md#value), `returning`: *string* \| readonly *string*[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult2` | *Partial*<AnyOrUnknownToOther<TRecord, {}\>\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`columnName` | *string* |
`value` | [*Value*](../modules/knex.knex-1.md#value) |
`returning` | *string* \| readonly *string*[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:721

▸ **update**(`data`: [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>, `returning`: ***, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, DeferredKeySelection<TRecord, never, *false*, {}, *false*, {}, never\>[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`data` | [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> |
`returning` | *** |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, DeferredKeySelection<TRecord, never, *false*, {}, *false*, {}, never\>[]\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:727

▸ **update**<TKey, TResult2\>(`data`: TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\> : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>, `returning`: TKey, `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *SetSingle*<AddKey<SetBase<UnwrapArrayMember<TResult\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\>\>, TKey\>, *true*\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`data` | TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\> : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> |
`returning` | TKey |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:732

▸ **update**<TKey, TResult2\>(`data`: TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\> : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>, `returning`: readonly TKey[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | - | *AddAliases*<AddKey<SetBase<UnwrapArrayMember<TResult\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\>\>, TKey\>, {}\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`data` | TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\> : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> |
`returning` | readonly TKey[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:744

▸ **update**<TKey, TResult2\>(`data`: TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\> : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>, `returning`: TKey \| readonly TKey[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | *string* |
`TResult2` | {}[] | *AddAliases*<AddKey<SetBase<UnwrapArrayMember<TResult\>, TRecord\>, TKey\>, {}\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`data` | TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\> : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> |
`returning` | TKey \| readonly TKey[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:756

▸ **update**<TKey, TResult2\>(`data`: TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\> : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>, `returning`: readonly TKey[], `options?`: DMLOptions): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`TKey` | *string* | - |
`TResult2` | {}[] | *AddAliases*<AddKey<SetBase<UnwrapArrayMember<TResult\>, TRecord\>, TKey\>, {}\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`data` | TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\> : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> |
`returning` | readonly TKey[] |
`options?` | DMLOptions |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:768

▸ **update**<TResult2\>(`data`: TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\> : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\>): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult2` | *number* |

#### Parameters:

Name | Type |
:------ | :------ |
`data` | TRecord *extends* [*CompositeTableType*](../modules/knex.knex-1.md#compositetabletype)<unknown, unknown, Partial<unknown\>\> ? [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *update*\> : [*DbRecordArr*](../modules/knex.knex-1.md#dbrecordarr)<TRecord\> |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:780

▸ **update**<TResult2\>(`columnName`: *string*, `value`: [*Value*](../modules/knex.knex-1.md#value)): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult2` | *number* |

#### Parameters:

Name | Type |
:------ | :------ |
`columnName` | *string* |
`value` | [*Value*](../modules/knex.knex-1.md#value) |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Inherited from: [QueryInterface](knex.knex-1.queryinterface.md)

Defined in: node_modules/knex/types/index.d.ts:784

___

### withUserParams

▸ **withUserParams**(`params`: *Record*<string, any\>): *Knex*<any, unknown[]\>

#### Parameters:

Name | Type |
:------ | :------ |
`params` | *Record*<string, any\> |

**Returns:** *Knex*<any, unknown[]\>

Defined in: node_modules/knex/types/index.d.ts:381
