/**
 * Generated using theia-extension-generator
 */
import { TheiaTestExtCommandContribution, TheiaTestExtMenuContribution } from './theia-test-ext-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(TheiaTestExtCommandContribution);
    bind(MenuContribution).to(TheiaTestExtMenuContribution);
});
