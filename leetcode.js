// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

const nums1 = [1,2,3,0,0,0];

const m = 3;

const nums2 = [2,5,6];

const n = 3;

var merge = function(nums1, m, nums2, n) {
    let j = n;
    for(let i = 0; i < n; i++){
        nums1[m + i] = nums2[j - 1];
        while(j < 0){
            return;
        }
        j--;
    }
    nums1.sort((a, b) => a - b);
};


// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
//The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
//The remaining elements of nums are not important as well as the size of nums.
// Return k.

const nums = [3,2,2,3];
const val = 3;

const removeElement = (nums, val) => {
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(val !== nums[i]){
            nums[k++] = nums[i];
        } 
    }
    return k;
};


// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
//That is, each element of nums is covered by exactly one of the ranges, 
//and there is no integer x such that x is in one of the ranges but not in nums.
// "a->b" if a != b
// "a" if a == b

const numbers = [0,2,3,4,6,8,9];

const summaryRange = (nums) => {
    if(!nums || nums.length === 0) return [];

    let start = nums[0];
    let end = nums[0];
    const ranges = [];

    for (let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i -1] + 1) end = nums[i];
        else {
            ranges.push([start, end]);
            start = nums[i];
            end = nums[i];
        }
    }

    ranges.push([start, end]);

    const result = [];

    for(const [start, end] of ranges){
        if(start === end) result.push(String(start));
        else result.push(`${start}->${end}`);
    }
    return result;
};




const s = "()[]{}";
var isValid = function(s) {
    if(!s || s.length === 0) return false;
    let bracket = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    let range = [];

    for(const char of s){
        if(bracket[char]){
            range.push(char);
        } else {
            const top = range.pop();
            if(!top || bracket[top] !== char){
                return false;
            }
        }
    }

    return range.length === 0;
};

var canConstruct = function (ransomNote, magazine) {
	let ransomNoteArr = ransomNote.split(''); // aabb
	let magazineArr = magazine.split(''); // aabbc

	for (const char of ransomNoteArr) {
		const index = magazineArr.indexOf(char);

		if (index === -1) {
			return false;
		}
		magazineArr.splice(index, 1);
	}

	return true;
};



//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
//or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

let h = "sadbutsad";
let ne = "sad";

var strStr = function(haystack, needle) {
    if(!haystack || !needle) return -1;

    let hayArr = haystack.split('');
    let needleArr = needle.split('');  

    for(const char of hayArr){
        const index = needleArr.indexOf(char);

        if(index !== -1){
            return index;
        }
        
    }

    return -1;
};


// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that 
// stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

let p = [7,6,4,3,1];

function maxProfit(prices) {
    if (!prices.length) {
        return 0;
    }

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
}

// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. 
//The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
//More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

let numss = [0,0,1,1,1,1,2,3,3];

var removeDuplicates = function(nums) {
    if(!nums) return null;

    // solve using pointers
    // goal is to return the array containing elements with two identical elements max
    // fast pointer will go through whole array
    // slow pointer will only increment if the same element has been repeated no more than 2 times 
    let slow = 2;
    let fast = 2;

    while(fast < nums.length){
        if(nums[fast] !== nums[slow - 2]){ //this condition is hit if fast pointer is not the same as slow pointer two indexes from now
            nums[slow] = nums[fast];
            slow++
        } 
        fast++
    }

    return slow;
};


// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

let = strs = ["flight","flower","flow"];

var longestCommonPrefix = function(strs) {
    if(!strs) return null;

    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++){ //setting i = 1 since we are using the first element as comparison
        while(strs[i].indexOf(prefix) !== 0){ //while loop activates at the beginning of a new element by comparing indexOf (method returns first sign of what's sent) element to 0 
            prefix = prefix.substring(0, prefix.length - 1); //decreases character in string every loop
            if(prefix === "") return "";
        }
    }

    return prefix;
};


// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
//or -1 if needle is not part of haystack.
 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

let haystack = "leetcode", needle = "leeto";

var strStr = function(haystack, needle) {
    if(!haystack || !needle) return -1;
    return haystack.indexOf(needle);
};

// Given an integer array nums and an integer k, 
//return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

let z = [1,2,3,1,2,3];
let w = 2;

var containsNearbyDuplicate = function(nums, k) {
    if(!nums || !k) return false;

    let hash = {};

    for(let i = 0; i < nums.length; i++){
        if(hash[nums[i]] !== undefined && i - hash[nums[i]] <= k){
            return true;
        }
        hash[nums[i]] = i;
    }

    return false;
};
