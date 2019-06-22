import { hot } from 'react-nativescript-hot-loader/root';
import * as React from "react";

import { Frame, Page, StackLayout, ProxyViewContainer, ContentView, View, TabView } from "react-nativescript/dist/client/ElementRegistry";
import { DockLayoutTest, HMRTest } from './layout';
import { FormattedStringLabel } from "./testComponents";
import { GestureLoggingTest, PanGestureTest, PageGestureTest, StatefulPageGestureTest, StatefulPageGestureTest2 } from "./gestures";
import { GameLoopTest } from "./stateful";
import { NestedHub, NestedModalTest, FramedHubTest, SimpleHub, ActionBarTest, TabViewTest, FrameTest, FramedLayoutTest } from "./navigation";
import { SpriteKitGameTest } from "./spriteKitGame";
import { ListViewTest, DynamicListViewWithImages } from "./list";
import { RCTContentView, RCTStackLayout, RCTLabel, RCTFlexboxLayout, RCTButton } from 'react-nativescript';

export const rootRef: React.RefObject<any> = React.createRef<any>();

// const app = () => (
//     <RCTFlexboxLayout flexDirection={"row"} height={40} backgroundColor={"purple"}>
//         <RCTFlexboxLayout
//             backgroundColor={"green"}
//             flexDirection={"column"}
//             flexGrow={1}
//             paddingTop={7}
//             // position={"absolute"}
//             alignItems={"center"}
//         >
//             <RCTLabel text={"LABEL"}/>
//         </RCTFlexboxLayout>
//         <RCTFlexboxLayout
//             backgroundColor={"blue"}
//             flexDirection={"column"}
//         >
//             <RCTButton text={"BUTTON"} className={""}/>
//         </RCTFlexboxLayout>
//         {/* <RCTButton text={"BUTTON"} className={""}/> */}
//     </RCTFlexboxLayout>
// );

// const app = () => <FramedLayoutTest forwardedRef={rootRef}/>
// const app = () => <FramedHubTest forwardedRef={rootRef}/>
const app = () => <FramedHubTest forwardedRef={rootRef}/>

export default hot(app);