# Nx run-commands example

This an example to show how to use `run-commands` to wrap existing targets in [`workspace.json`](./workspace.json).

Try it!

```
nx build demo
```

You should see `Hello Alice!` printed before the actual build starts.

## Some explanations

In the `demo` app, the original `build` target is renamed to `build-app`, and `build` uses `run-commands` to execute some arbitray commands before running `nx build-app`.

You can add a new target that executes shell scripts by adding to `architect` section of your project.

e.g.

```
"architect": {
  "say-hello": {
    "builder": "@nrwl/workspace:run-commands",
    "options": {
      "commands": [
        {
          "command": "echo Hello!"
        }
      ]
    }
  }
}
```

Then you can run `nx say-hello [project]` to see the result.

## Note for Nx 9.4

This options will be simplified in Nx 9.4, so the same example above would be as follows.

```
"architect": {
  "say-hello": {
    "builder": "@nrwl/workspace:run-commands",
    "options": {
      "command": "echo Hello!"
    }
  }
}
```

And you can add new commands with a schematic in 9.4:

```
nx generate @nrwl/workspace:run-commands
```
