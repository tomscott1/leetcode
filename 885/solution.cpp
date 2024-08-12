class Solution {
public:
    vector<vector<int>> spiralMatrixIII(int rows, int cols, int rStart, int cStart) {

        vector<vector<int>> dirs = {{0,1},{1,0},{0,-1},{-1,0}};
        vector<vector<int>> res = {};
        int steps = 1;
        int r = rStart;
        int c = cStart;
        int i = 0;
        while (res.size() < rows * cols) {
            for (int x = 0; x < 2; x++) {
                vector<int> curDir = dirs[i];
                for (int y = 0; y < steps; y++) {
                    if (r >= 0 && r < rows && c >= 0  && c < cols) {
                        res.push_back({r, c});
                    }
                    r = r + curDir[0];
                    c = c + curDir[1];
                }
                i = (i + 1) % 4;
            }
            steps++;
        }
        return res;
    }
};