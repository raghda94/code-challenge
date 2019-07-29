# Engel & Völkers Code Challenge

## Task

You are provided arrays `A` and `B`, and values `M`, `X` and `Y`:

- `A` contains the list of the weight of `N` people waiting to use the elevator
- `B` contains the floors each of the `N` people need to visit
- You are also given:
    - `M` (number of floors in the building)
    - `X` (maximum capacity of lift)
    - `Y` (maximum weight limit on lift)

Given that people must be served in the order they arrive,
write a function to calculate the number of floors the lift must stop at and come back
to the ground floor in order to service all of the people.

eg. A = [40, 40, 100, 60], B = [3, 3, 2, 2], M = 3, X = 3, Y = 200

1. Lift will take person 1, 2, 3 to floor 3 and floor 2 => 2 floors
1. Lift will return to ground floor => 1 floor
1. Lift will take person 4 to floor 2 => 1 floor
1. Lift will return to ground floor => 1 floor

Total floors = 5

Your answer must be within:

- Worst time complexity = `O(N)`
- Auxillary space complexity = `O(N)`

## Testing

Your solution will be tested with Node.js version > 10 (see ./.nvrmc) as follows:

````sh
npm test
````

This will run the linter, generate test coverage and evaluate the testing coverage.

## Submission

Please upload to Dropbox, Google Drive etc. and share the link with sudharshan.ravindran@engelvoelkers.com

## Notes

- **DO NOT** post your solution online, please submit your solution as described above
- **DO NOT** change any other file other than *`challenge.js`*
- **DO NOT** install any other dependency from NPM or otherwise
