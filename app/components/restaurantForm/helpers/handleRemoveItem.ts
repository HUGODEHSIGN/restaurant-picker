export default function handleRemoveItem(
  badgeId: number,
  setState: React.Dispatch<React.SetStateAction<number[]>>
) {
  setState((prev) => [...prev].filter((stateId) => badgeId !== stateId));
}
