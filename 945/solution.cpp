class Solution {
public:
    int minIncrementForUnique(vector<int>& nums) {
        int moves = 0;
        int addMoves = 0;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size(); i++) {
            if (i + 1 < nums.size() && nums[i] == nums[i+1]) {
                nums[i+1]++;
                moves++;
            }
            if (i + 1 < nums.size() && nums[i] > nums[i+1]) {
                addMoves = (nums[i] - nums[i+1]) + 1;
                nums[i+1]+= addMoves;
                moves+= addMoves;
                addMoves = 0;
            }
        }
        return moves;
    }
};