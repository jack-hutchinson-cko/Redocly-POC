import { SearchBox } from '@redocly/ui';
import styled from 'styled-components';
import { device } from '../css/tokens';
import { CheckoutLogoIcon } from '../svg';

export const StyledSearchBox = styled(SearchBox)`
	border: 1px solid var(--border);
	border-radius: 8px;
	width: 380px;
	height: 100%;

	input {
		border-radius: 8px;
		color: var(--secondary-font-color);
		margin-top: 5px;
		height: 40px;
		line-height: 24px;
		padding: 16px 8px;
		max-width: 380px;
		width: 380px;
	}

	input::placeholder {
		color: var(--secondary-font-color);
	}

	span {
		top: 45%;
		margin-left: 0px;
	}

	span > span {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0' y='0' viewBox='0 0 490 490' xml:space='preserve'%3E%3Cpath fill='%238688A0' d='M484 455.2L366.2 337.4c29.2-35.6 46.8-81.2 46.8-130.9C413 92.5 301.5 0 206.5 0 92.4 0 0 92.5 0 206.5S92.4 413 206.5 413c49.7 0 95.2-17.5 130.8-46.7L455.1 484c8 8 20.9 8 28.9 0C492 476.1 492 463.1 484 455.2zM206.5 371.9C115.2 371.9 41 297.7 41 206.5S115.2 41 206.5 41C297.7 41 372 115.3 372 206.5S297.7 371.9 206.5 371.9z'/%3E%3C/svg%3E") !important;
	}

	ul {
		background: var(--header-background);
		border-radius: 8px;
		border: 1px solid var(--border);
		top: calc(100% + 15px);
		width: 380px;
	}

	ul div {
		color: var(--font-color);
	}

	ul div:first-child {
		padding-top: 16px;
	}

	${device.toLaptop} {
		width: 280px;

		span {
			margin: auto;
			padding: 0px;
		}

		input {
			width: 280px;
		}
	}

	${device.toTablet} {
		width: 180px;

		span {
			margin: auto;
			padding: 0px;
		}

		input {
			width: 180px;
			margin-top: 4px;
		}

		span span {
			display: none;
		}
	}

	${device.toMobileXL} {
		input {
			height: 32px;
			margin-top: 0px;
		}
	}
`;

export const StyledLogoIcon = styled(CheckoutLogoIcon)`
	padding-top: 6px;
`;

export const StyledContainer = styled.header`
	background: var(--header-background);
	border-bottom: 1px solid var(--border);
	color: var(--font-color);
	display: flex;
	justify-content: space-between;
	padding: 24px 40px;
	width: 100%;
`;

export const StyledLogo = styled.a`
	align-items: center;
	display: flex;
	gap: 12px;
	padding: 0;
	margin: 0;
	text-decoration: none;

	:hover {
		text-decoration: none;
	}
`;

export const StyledLogoText = styled.h3`
	color: var(--font-color);
	font-size: 24px;
	line-height: 40px;
	margin: 0;

	${device.toMobileXL} {
		display: none;
	}
`;

export const StyledLink = styled.a`
	color: var(--font-color);
	cursor: pointer;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0em;
	text-align: left;
	margin: auto;
	text-decoration: none;

	:hover {
		text-decoration: none;
	}

	${device.toLaptop} {
		display: none;
	}
`;

export const StyledLeftHeader = styled.div`
	display: flex;
	gap: 40px;

	${device.toMobileXL} {
		gap: 16px;
	}
`;

export const StyledRightHeader = styled.div`
	display: flex;
	gap: 24px;
`;
