// @ts-nocheck
import { UtilService } from "../services/UtilService";
import { Asset } from "../types/Asset";
import { Contract } from "../types/Contract";


export const useAssign = (assets: Asset[], contracts: Contract[]) => {

    const getWithoutId = (entity) => {
        const { id, ...restOfEntity } = entity;
        return restOfEntity;
    }

    return assets.map(asset => {
        const contract = contracts.find(contract => contract.id === asset.contractsIds[0]);
        const assetWithoutId = getWithoutId(asset);
        const contractWithoutId = getWithoutId(contract);
        const id = UtilService.makeId('assignedAsset');
        const assignedAsset = { id, ...assetWithoutId, ...contractWithoutId };
        return assignedAsset;
    });

}