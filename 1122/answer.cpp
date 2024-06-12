class Solution {
public:
    vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
        vector<int> result;
        vector<int> remaining;

        std::unordered_map<int, int> countMap;

        for (int num : arr2) {
            countMap[num] = 0; // Initialize the count to 0
        }

        for (int num : arr1) {
            if (countMap.find(num) != countMap.end()) {
                countMap[num]++;
            } else {
                remaining.push_back(num);
            }
        }

        std::sort(remaining.begin(), remaining.end());

        for (int num : arr2) {
            for (int i = 0; i < countMap[num]; i++) {
                result.push_back(num);
            }
            
        }

        for (int num : remaining) {
            result.push_back(num);
        }

        return result;
    }
};