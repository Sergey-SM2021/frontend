import { Error } from "pages/Error/ui/Error"
import { Component, ErrorInfo, PropsWithChildren } from "react"

type ErrorBoundaryProps = PropsWithChildren;

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError() {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log(error, errorInfo)
	}

	render() {
		if (this.state.hasError) {
			return <Error />
		}
		return this.props.children
	}
}
