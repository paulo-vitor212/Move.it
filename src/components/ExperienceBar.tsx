import * as Styles from '../styles/components/experienceBarStyles';

export function ExperienceBar() {
    return (
        <Styles.Header className="experience-bar">
            <Styles.Span>0 xp</Styles.Span>
            <Styles.ProgressBackground>
                <Styles.Progress progress={50} />
                <Styles.CurrentExperience className="current-experience" progress={50}>
                    300 xp
                </Styles.CurrentExperience>
            </Styles.ProgressBackground>
            <Styles.Span>600 xp</Styles.Span>
        </Styles.Header>
    )
}