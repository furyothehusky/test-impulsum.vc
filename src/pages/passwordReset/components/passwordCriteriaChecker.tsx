import { ReactNode } from 'react';
import { hasMinimumLength, hasNumber, hasLowercase, hasUppercase, hasSpecialChar } from '../../../helpers/regexp';
import CircleCheck from '../../../assets/circle-check.svg';


export default function PasswordCriteriaChecker({ password }: { password: string }) {

    return (
        <CriteriaContainer>
            <CriteriaColumn>
                <CriteriaItem isValid={hasMinimumLength(password)}>
                    {hasMinimumLength(password) ? 'Has 12 minimum characters ' : '12 minimum characters '}
                </CriteriaItem>
                <CriteriaItem isValid={hasNumber(password)}>
                    {hasNumber(password) ? 'Has one number' : 'one number'}
                </CriteriaItem>
                <CriteriaItem isValid={hasLowercase(password)}>
                    {hasLowercase(password) ? 'Has one lowercase' : 'one lowercase'}
                </CriteriaItem>
            </CriteriaColumn>
            <CriteriaColumn>
                <CriteriaItem isValid={hasUppercase(password)}>
                    {hasUppercase(password) ? 'Has one uppercase' : 'one uppercase'}
                </CriteriaItem>
                <CriteriaItem isValid={hasSpecialChar(password)}>
                    {hasSpecialChar(password) ? 'Has one special character' : 'one special character'}
                </CriteriaItem>
            </CriteriaColumn>
        </CriteriaContainer>
    );
}

function CriteriaContainer({ children }: { children: ReactNode }) {
    return <div className="criteria-container">{children}</div>
}

function CriteriaColumn({ children }: { children: ReactNode }) {
    return <div className="criteria-column">{children}</div>
}

function CriteriaItem({ children, isValid }: { children: ReactNode, isValid: boolean; }) {
    return <div className="criteria-item" style={{ color: isValid ? 'green' : '' }}>
        <img src={CircleCheck} className='check-icon' alt="Check" /> {children}
    </div>

}