import {
    Box,
    Typography,
} from '@mui/material'
import iconMotivation from '../../assets/icon-motivation.svg'
import iconBenefits from '../../assets/icon-benefits.svg'

const features = [
    {
        title: 'What you need to be motivated',
        description:
            'Focusing on a dull task doesn’t make it any more attractive. Zooming out and asking yourself why you are bothering in the first place will make it more appealing.',
        icon: iconMotivation,
        color: '#FFBD5E',
        className: 'motivation-feature',
    },
    {
        title: 'How Motivve will help you',
        description:
            'There are many ways you can place small successes earlier on to spur motivation later. Structuring your to-do lists, placing straightforward tasks such as.',
        icon: iconBenefits,
        color: '#FF6B70',
        className: 'benefits-feature',
    },
]

function Features() {
    return (
        <Box component="section" className="features" id="resources">
            {features.map((feature) => (
                <Box
                    component="article"
                    key={feature.title}
                    className={`feature-card ${feature.className}`}
                >
                    <Box
                        className="feature-icon"
                        sx={{backgroundColor: feature.color}}
                    >
                        <Box component="img" src={feature.icon} alt=""/>
                    </Box>

                    <Typography component="h2">
                        {feature.title}
                    </Typography>

                    <Typography component="p">
                        {feature.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}

export default Features