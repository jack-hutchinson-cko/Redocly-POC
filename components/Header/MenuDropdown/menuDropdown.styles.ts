import styled from 'styled-components';

export const StyledContainer = styled.div`
	background: var(--background);
	border: 1px solid var(--border);
	box-shadow: 0px 2px 5px rgba(12, 17, 66, 0.15);
	color: var(--font-color);
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 32px;
	width: 452px;
	position: absolute;
	top: 64px;
	z-index: 1000;
`;

export const StyledSVG = styled.div`
	display: flex;
	margin: auto;
	transform: ${(props: { isOpen: boolean }) => (props.isOpen ? 'rotate(180deg)' : 'none')};
`;

export const StyledTopLabel = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
	text-decoration: none;
`;

export const StyledItem = styled.a`
	text-decoration: none;

	:hover {
		text-decoration: none;
	}

	:first-child {
		margin-bottom: 24px;
	}
`;

export const StyledText = styled.p`
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 300;
	gap: 8px;
	margin: 8px 0 0;
	text-decoration: none;
`;
