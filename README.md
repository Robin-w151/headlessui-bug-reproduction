# Headless UI bug reproduction example

This is a minimal react application to reproduce a *@headlessui/react* typescript bug.

## Get started

1. `yarn install`
2. `yarn build`

## Issue description

The following typescript error is displayed, when the *@headlessui/react* Menu component is used:

`TS2590: Expression produces a union type that is too complex to represent.`

Follow the steps from '*Get started*' to reproduce this bug.

**NOTE**: Only the typescript type checker (`tsc`) complains about this issue. When the app is started with `yarn start`,
the app works as expected.
