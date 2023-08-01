
import { Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';

export function isOrientationPortrait() {
    const dim = Dimensions.get("screen")
    return dim.height >= dim.width
}

export function useAsync(asyncFn, onSuccess) {
    useEffect(() => {
        let isActive = true;
        asyncFn().then(data => {
            if (isActive) onSuccess(data)
            else console.log("aborted setState on unmounted component")
        });
        return () => {
            isActive = false;
        };
    }, [asyncFn, onSuccess]);
}