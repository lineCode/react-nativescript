import * as console from "../shared/Logger";
import * as React from "react";
import { TextView as NativeScriptTextView } from "tns-core-modules/ui/text-view/text-view";
import { TextViewProps, PropsWithoutForwardedRef } from "../shared/NativeScriptComponentTypings";
import { TextBaseComponentProps, RCTTextBase, RNSFriendly } from "./TextBase";
import { EditableTextBaseComponentProps, RCTEditableTextBase } from "./EditableTextBase";

export const RNSFriendlyTextView = RNSFriendly(NativeScriptTextView);

const elementKey: string = "textView";
/* Registration is instead performed in elementRegistry to remove this side-effect from the module and hence aid tree-shaking */
// register(
//     elementKey,
//     (
//         props: Props,
//         rootContainerInstance: Container,
//         hostContext: HostContext,
//     ) => {
//         return new RNSFriendlyTextView();
//     }
// );

interface Props {
    // No mandatory props.
}

export type TextViewComponentProps<
    E extends NativeScriptTextView = NativeScriptTextView
> = Props /* & typeof _TextView.defaultProps */ & Partial<TextViewProps> & EditableTextBaseComponentProps<E>;

/**
 * Represents a text TextView.
 */
export class _TextView<
    P extends TextViewComponentProps<E>,
    S extends {},
    E extends NativeScriptTextView = NativeScriptTextView
> extends RCTEditableTextBase<P, S, E> {
    render() {
        const {
            forwardedRef,

            onLoaded,
            onUnloaded,
            onAndroidBackPressed,
            onShowingModally,
            onShownModally,

            onTap,
            onDoubleTap,
            onPinch,
            onPan,
            onSwipe,
            onRotation,
            onLongPress,
            onTouch,

            onPropertyChange,

            text,
            formattedText,
            children,
            ...rest
        } = this.props;

        if (text && formattedText) {
            console.warn(`Both text and formattedText provided; shall use formattedText.`);
        }

        const textContent = {
            [formattedText ? "formattedText" : "text"]: formattedText || text,
        };

        return React.createElement(
            elementKey,
            {
                ...rest,
                ...textContent,
                ref: forwardedRef || this.myRef,
            },
            children // Weird that a TextView may contain children, but what do I know.
        );
    }
}

type OwnPropsWithoutForwardedRef = PropsWithoutForwardedRef<TextViewComponentProps<NativeScriptTextView>>;

export const TextView: React.ComponentType<
    OwnPropsWithoutForwardedRef & React.ClassAttributes<NativeScriptTextView>
> = React.forwardRef<NativeScriptTextView, OwnPropsWithoutForwardedRef>(
    (props: React.PropsWithChildren<OwnPropsWithoutForwardedRef>, ref: React.RefObject<NativeScriptTextView>) => {
        const { children, ...rest } = props;

        return React.createElement(
            _TextView,
            {
                ...rest,
                forwardedRef: ref,
            },
            children
        );
    }
);
