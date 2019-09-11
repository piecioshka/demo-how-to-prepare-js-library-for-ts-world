// Step 1
import _ from 'lodash';
_.compare = function (left: any, right: any) {
    return _.isEqual(left, right);
}
const isTheSame = _.compare(1, 1);
console.log({ isTheSame });

// Step 2
// declare module 'lodash' {
//     interface LoDashStatic {
//         compare(left: any, right: any): boolean;
//     }
// }
