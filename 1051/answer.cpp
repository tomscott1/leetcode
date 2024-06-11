class Solution {
public:
    int heightChecker(vector<int>& heights) {
        std::vector<int> expected = heights;
        std::sort(std::begin(expected),std::end(expected));
        int ans = 0;
        for (int i = 0; i < heights.size(); i++) {
            if (heights[i] != expected[i]) {
                ans++;
            }
        }
        return ans;
    }
};