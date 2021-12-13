var findMedianSortedArrays = function(nums1, nums2) {
    let l1 = nums1.length -1, l2 = nums2.length - 1
    if(l1 < l2) return findMedianSortedArrays(nums2, nums1)

    let p = Math.floor((l1 + l2 + 1) / 2)
    let p1 = 0, p2 = 0

    const loopLimit = 50
    let loop = 0
    while(midNo > 1) {
        let p = Math.floor(midNo / 2)
        if(nums1[p1 + p] >= nums2[p2 + p]) p2 = p2 + p
        else p1 = p1 + p

        //loop control
        loop++
        if(loop > loopLimit) break
    }
};

let nums1 = [1,3,6,11,15,37,567]
let nums2 = [2,6,16,346,8901]
findMedianSortedArrays(nums1, nums2)