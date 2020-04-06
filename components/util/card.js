import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		minHeight: 460,
		'&:hover': {
			transform: 'scale (5)',
			transition: '200ms ease',
			backgroundColor: '#f1f3f5',
			border: '1px solid lightgray'
		}
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: blue[900]
	}
}));

export default function RecipeReviewCard(props) {
	const classes = useStyles();
	const [ expanded, setExpanded ] = useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{props.letter}
					</Avatar>
				}
				title={props.title}
				subheader="April 05, 2020"
			/>
			<Link href={props.linkCard} style={{ cursor: 'pointer' }}>
				<a style={{ textDecoration: 'none' }}>
					<CardMedia
						className={classes.media}
						image={props.pic}
						style={{ width: '50%', height: 'auto', margin: '0 auto' }}
						title="pic"
					/>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							<strong>{`${props.title}`}</strong> is one of the exercice to train. It includes basic
							notion, to get in react with hooks, and a start of making more than one component to get a
							code easy to understand.
						</Typography>
					</CardContent>
				</a>
			</Link>

			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Method:</Typography>
					<Typography paragraph>Please find the exercice to train on react with hooks.</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
