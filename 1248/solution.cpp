// not working

// [45627,50891,94884,11286,35337,46414,62029,20247,72789,89158,54203,79628,25920,16832,47469,80909]
// k = 1
// Output 23 Expected 28

class Solution {
public:
    int numberOfSubarrays(vector<int>& nums, int k) {
        int ans, odd, left, mid;
        ans = odd = left = mid = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] % 2 != 0) odd++;
            while (odd > k) {
                if (nums[i] % 2 != 0) odd--;
                left++;
                mid = left;
            }
            if (odd == k) {
                while (nums[mid] % 2 == 0) mid++;
                ans += (mid - left) + 1;
            }
        }
        return ans;
    }
};