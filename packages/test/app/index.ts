import { fooFn, Foo } from 'core'
import { Kafka } from 'kafkajs'

const foo = new Foo('foo', 123)
fooFn('foo', 123)

const kafka = new Kafka({ brokers: [] })
