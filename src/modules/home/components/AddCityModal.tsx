import {Box, Button, CircularProgress, Modal, TextField} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useAppDispatch} from '~/hooks/redux';
import {checkForExistence} from '~/store/reducers/cities/actions';
import {addToStartToMyCities} from '~/store/reducers/cities/reducer';
import {City} from '~/types/City';

type AddCityModalProps = {
	open: boolean;
	handleClose: () => void;
};

type IFormInput = {
	title: string;
};

const useStyles = makeStyles({
	modal: {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		border: '2px solid #000',
		padding: '40px',
		background: '#fff',
	},
	form: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridRowGap: '10px',
		position: 'relative',
	},
	formProgress: {
		position: 'absolute',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		background: 'rgb(255, 255, 255, 0.6)',
		display: 'grid',
		placeItems: 'center',
		zIndex: '10000',
	},
});

const schema = yup.object().shape({
	title: yup.string().required('Введите название города'),
});

const AddCityModal = ({open, handleClose}: AddCityModalProps) => {
	const dispatch = useAppDispatch();
	const {
		register,
		formState: {errors, isSubmitting},
		handleSubmit,
		setError,
		reset,
	} = useForm<IFormInput>({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});
	const styles = useStyles();

	const onSubmit = async (values: IFormInput) => {
		const {error, data} = await dispatch(
			checkForExistence(values.title)
		).unwrap();
		if (error.hasError) {
			setError('title', {message: error.message});
		} else {
			dispatch(addToStartToMyCities(data as unknown as City));
			reset();
		}
	};
	return (
		<Modal open={open} onClose={handleClose}>
			<Box className={styles.modal}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					{isSubmitting && (
						<Box className={styles.formProgress}>
							<CircularProgress />
						</Box>
					)}
					<TextField
						error={!!errors?.title}
						label={errors.title?.message}
						placeholder="Введите название города на английском"
						{...register('title')}
					/>
					<Button variant="contained" type="submit">
						Создать
					</Button>
				</form>
			</Box>
		</Modal>
	);
};

export default AddCityModal;
