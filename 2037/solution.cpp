class Solution {
public:
    int minMovesToSeat(vector<int>& seats, vector<int>& students) {

        std::sort(seats.begin(), seats.end());
        std::sort(students.begin(), students.end());
        int moves = 0;
        for (int i = 0; i < seats.size(); i++) {
            moves+= abs(students[i] - seats[i]);
        }
        return moves;
    }
};