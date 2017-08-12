import test from 'tape'
import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { incrementAsync } from './sagas'

test('incrementAsync Saga Test', (assert) => {
    const gen = incrementAsync()

    assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT'}),
        'incrementAsync Saga must dispatch an INCREMENT action'
    )

    assert.deepEqual(
        gen.next(),
        {done: true, value: undefined},
        'incrementAsync Saga must be done'
    )

    assert.end()
});