import {
    Box,
    Stack,
    Typography,
} from '@mui/material'
import avatarTimeManagement from "../../assets/avatar-time-management.png";
import avatarProjects from "../../assets/avatar-projects.png";
import avatarNotes from "../../assets/avatar-notes.png";
import avatarTeamWiki from "../../assets/avatar-team-wiki.png";

const tasks = [
    {title: 'Time management', date: '26 Apr', avatar: avatarTimeManagement, color: '#D9E4FF', status: '#FF5358'},
    {title: 'Projects & tasks', date: '27 Apr', avatar: avatarProjects, color: '#FFBD5E', status: '#D4E9FF'},
    {title: 'Notes & docs', date: '1 Mar', avatar: avatarNotes, color: '#D9E4FF', status: '#FFF2BD', faded: true},
    {title: 'Team wiki', date: '6 Mar', avatar: avatarTeamWiki, color: '#D9E4FF', status: '#FFE6EC', faded: true},
]

function TaskPreview() {
    return (
        <Stack className="task-preview" spacing={1}>
            {tasks.map((task) => (
                <Box
                    key={task.title}
                    className={`task-row ${task.faded ? 'task-faded' : ''}`}
                >
                    <Box
                        className="task-indicator"
                        sx={{backgroundColor: task.color}}
                    />

                    <Typography className="task-title">
                        {task.title}
                    </Typography>

                    <Box
                        component="img"
                        src={task.avatar}
                        alt=""
                        className="task-avatar"
                    />

                    <Typography className="task-date">
                        {task.date}
                    </Typography>

                    <Box
                        className="task-status"
                        sx={{backgroundColor: task.status}}
                    />
                </Box>
            ))}
        </Stack>
    )
}

export default TaskPreview