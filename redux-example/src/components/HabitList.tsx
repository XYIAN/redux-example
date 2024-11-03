import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Box, Grid, Paper } from "@mui/material";

const HabitList: React.FC = () => {
  const { habits } = useSelector((state: RootState) => state.habits.habits);
  return (
    <Box>
      {habits.map((habit) => {
        return (
          <Paper key={habits.ID}>
            <Grid>
              <Grid>
                <h6>{habit.name}</h6>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </Box>
  );
};

export default HabitList;
