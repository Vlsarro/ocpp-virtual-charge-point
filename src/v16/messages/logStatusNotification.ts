import { z } from "zod";
import {
  type OcppCall,
  type OcppCallResult,
  OcppOutgoing,
} from "../../ocppMessage";
import type { VCP } from "../../vcp";

const LogStatusNotificationReqSchema = z.object({
  status: z.enum([
    "BadMessage",
    "Idle",
    "NotSupportedOperation",
    "PermissionDenied",
    "Uploaded",
    "UploadFailure",
    "Uploading",
  ]),
  requestId: z.number().int().nullish(),
});
type LogStatusNotificationReqType = typeof LogStatusNotificationReqSchema;

const LogStatusNotificationResSchema = z.object({});
type LogStatusNotificationResType = typeof LogStatusNotificationResSchema;

class LogStatusNotificationOcppMessage extends OcppOutgoing<
  LogStatusNotificationReqType,
  LogStatusNotificationResType
> {
  resHandler = async (
    _vcp: VCP,
    _call: OcppCall<z.infer<LogStatusNotificationReqType>>,
    _result: OcppCallResult<z.infer<LogStatusNotificationResType>>,
  ): Promise<void> => {
    // NOOP
  };
}

export const logStatusNotificationOcppMessage =
  new LogStatusNotificationOcppMessage(
    "LogStatusNotification",
    LogStatusNotificationReqSchema,
    LogStatusNotificationResSchema,
  );
