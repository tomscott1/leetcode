class KthLargest {
public:
    KthLargest(int k, vector<int>& nums) {
        this->k = k;
        
        for (int x : nums) {
            minQ.push(x);
        }
        while (minQ.size() > k) {
            minQ.pop();
        }
    }
    // push size pop top
    int add(int val) {
        minQ.push(val);
        if (minQ.size() > k) minQ.pop();
        return minQ.top();
    }
private:
    int k;
    priority_queue<int, vector<int>, greater<int>> minQ;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */