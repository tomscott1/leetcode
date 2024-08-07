class Solution {
public:
    string kthDistinct(vector<string>& arr, int k) {
        std::unordered_map<std::string, int> valuesMap;
        for (int i = 0; i < arr.size(); i++) {
            if (!valuesMap.count(arr[i])) {
                valuesMap[arr[i]] = 1;
            } else {
                valuesMap[arr[i]]++;
            }
        }
        for (int i = 0; i < arr.size(); i++) {
            if (valuesMap[arr[i]] == 1) {
                k -= 1;
            }
            if (k == 0) {
                return arr[i];
            }
        }
        return "";
    }
};