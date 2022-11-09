import BleRepository from '../../../../../data/repositories/ble/BleRepository.js'
import Constants from '../../../../../utils/Constants.js'
import { logDebug } from '../../../../../utils/logger/Logger.js'
import { ACTION_AUTHENTICATE } from '../../action/BleActions.js'

const LOG_TAG = Constants.LOG.BT_USECASE_LOG

const RequestAuthUseCase = () => {

    /**
     * ble repository's api that sends ble characteristic data.
     */
    const { sendBleCustomValue } = BleRepository()

    /**
     * execute usecase of requesting authentication to device.
     * [ sequence ]
     * 1. create protocol.
     * 2. encrypt values.
     * 3. send encrypted values.
     */
    executeRequestAuthUseCase = () => {
        logDebug(LOG_TAG, ">>> ### triggered executeRequestAuthUseCase")

        return new Promise((fulfill, reject) => {
            sendBleCustomValue(ACTION_AUTHENTICATE)
                .then(() => fulfill())
                .catch((e) => reject(e))
        })
    }

    return { executeRequestAuthUseCase }
}

export default RequestAuthUseCase