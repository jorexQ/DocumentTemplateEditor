import "reflect-metadata";
import { injectable, inject } from "inversify";
import { BaseManager } from "../bootstrap/base-manager";
import { nameof } from "../Infrastructure/base-tool";
import {
  BootstrapEventBus,
  BootstrapArg
} from "../bootstrap/bootstrap-event-bus";
import { BootstrapContext } from "../bootstrap/bootstrap-context";
import { EventHandler } from "../infrastructure/event-bus";

@injectable()
export class VersionManager extends BaseManager {
  constructor(
    @inject(nameof(BootstrapEventBus)) bootstrapEventBus: BootstrapEventBus
  ) {
    super(bootstrapEventBus);
  }

  protected async preparingHandle(): Promise<
    EventHandler<BootstrapContext, BootstrapArg>
  > {
    return async function(this: BootstrapContext, arg: BootstrapArg) {
      console.log("VersionManager preparing");
      return;
    };
  }

  protected async initializingHandle(): Promise<
    EventHandler<BootstrapContext, BootstrapArg>
  > {
    return async function(this: BootstrapContext, arg: BootstrapArg) {
      console.log("VersionManager initializing");
      return;
    };
  }

  protected async startingHandle(): Promise<
    EventHandler<BootstrapContext, BootstrapArg>
  > {
    return async function(this: BootstrapContext, arg: BootstrapArg) {
      console.log("VersionManager starting");
      return;
    };
  }
}
